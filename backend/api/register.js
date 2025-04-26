const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../db"); // Import the database connection

const router = express.Router(); // Define the router

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      error: "First name, last name, email, and password are required",
    });
  }

  try {
    // Check if the user already exists
    const queryCheckUser = "SELECT * FROM users WHERE email = $1";
    const result = await db.query(queryCheckUser, [email]);
    if (result.rows.length > 0) {
      return res.status(409).json({
        error: "User already exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const queryInsertUser =
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)";
    await db.query(queryInsertUser, [
      firstName,
      lastName,
      email,
      hashedPassword,
    ]);

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
});

module.exports = router; // Export the router