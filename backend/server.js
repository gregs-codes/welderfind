const express = require("express");
const cors = require("cors");
const app = express();

// Import routers
const googleAuthRouter = require("./api/oauth/google");
const registerRouter = require("./api/register");
const loginRouter = require("./api/login");

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Adjust origin as needed
app.use(express.json()); // Parse JSON requests

// Console logger
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// Register routers
app.use("/api/oauth", googleAuthRouter); // Google OAuth routes
app.use("/api/auth", registerRouter); // Registration routes
app.use("/api/auth", loginRouter); // Login routes

// Test route
app.get("/test", (req, res) => {
  res.send("Test route working!");
});

// Start the server
app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});