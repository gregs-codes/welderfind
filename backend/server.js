require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const cors = require("cors");
const googleAuthRouter = require("./api/oauth/google");
const registerRouter = require("./api/register");
const loginRouter = require("./api/login");

const app = express();

// Middleware
const allowedOrigins = [
  "http://localhost:3000", // Localhost for development
  "https://ibetterweld.com", // Production frontend
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Allow cookies and credentials
  })
);

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
const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});