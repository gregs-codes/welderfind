// Login Route
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
  
    try {
      // Check if the user exists
      const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
      if (user.length === 0) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
  
      // Compare the password
      const isMatch = await bcrypt.compare(password, user[0].password);
      if (!isMatch) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
  
      // Generate a JWT token
      const token = jwt.sign(
        { id: user[0].id, email: user[0].email, role: user[0].role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
  
      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });