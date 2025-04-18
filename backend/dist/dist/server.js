"use strict";

require("dotenv").config(); // Load environment variables from .env
var express = require("express");
var cors = require("cors");
var googleAuthRouter = require("./api/oauth/google");
var registerRouter = require("./api/register");
var loginRouter = require("./api/login");
var app = express();

// Middleware
var allowedOrigins = ["http://localhost:3000",
// Localhost for development
"https://ibetterweld.com" // Production frontend
];
app.use(cors({
  origin: function origin(_origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!_origin || allowedOrigins.includes(_origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true // Allow cookies and credentials
}));
app.use(express.json()); // Parse JSON requests

// Console logger
app.use(function (req, res, next) {
  console.log("[".concat(req.method, "] ").concat(req.url));
  next();
});

// Register routers
app.use("/api/oauth", googleAuthRouter); // Google OAuth routes
app.use("/api/auth", registerRouter); // Registration routes
app.use("/api/auth", loginRouter); // Login routes

// Test route
app.get("/test", function (req, res) {
  res.send("Test route working!");
});

// Start the server
var PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000
app.listen(PORT, function () {
  console.log("\u2705 Server running on http://localhost:".concat(PORT));
});