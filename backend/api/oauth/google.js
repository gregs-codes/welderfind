// Google OAuth Route
app.post("/api/oauth/google", async (req, res) => {
    const { credential } = req.body;
  
    if (!credential) {
      return res.status(400).json({ error: "Google credential is required" });
    }
  
    try {
      // Verify the Google token
      const ticket = await googleClient.verifyIdToken({
        idToken: credential,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
  
      const payload = ticket.getPayload();
      const { sub: googleId, email, name, picture } = payload;
  
      // Check if the user already exists
      const [existingUser] = await db.query(
        "SELECT * FROM users WHERE google_id = ? OR email = ?",
        [googleId, email]
      );
  
      let user;
      if (existingUser.length > 0) {
        user = existingUser[0];
      } else {
        // Create a new user
        const [result] = await db.query(
          "INSERT INTO users (name, email, google_id, picture, role) VALUES (?, ?, ?, ?, ?)",
          [name, email, googleId, picture, "user"]
        );
        user = { id: result.insertId, name, email, googleId, picture, role: "user" };
      }
  
      // Generate a JWT token
      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
  
      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });