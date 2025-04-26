const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const db = require("../../db"); // Import the database connection
require("dotenv").config();

const router = express.Router(); // Define the router

router.post("/google", async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({ error: "Google credential is required" });
    }

    // Verify the Google token
    const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub: googleId, email, name, picture } = payload;

    // Check if the user already exists
    let user;
    const queryCheckUser = "SELECT * FROM users WHERE google_id = $1 OR email = $2";
    const result = await db.query(queryCheckUser, [googleId, email]);

    if (result.rows.length > 0) {
      user = result.rows[0];
    } else {
      // Create a new user
      const queryInsertUser =
        "INSERT INTO users (name, email, google_id, picture, role) VALUES ($1, $2, $3, $4, $5) RETURNING *";
      const insertResult = await db.query(queryInsertUser, [
        name,
        email,
        googleId,
        picture,
        "user",
      ]);
      user = insertResult.rows[0];
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Include user data in the response
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        picture: user.picture, // Include picture
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error in Google OAuth:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router; // Export the router