require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const cors = require("cors");
const googleAuthRouter = require("./api/oauth/google");
const registerRouter = require("./api/register");
const loginRouter = require("./api/login");
const testDbRouter = require("./api/test-db"); // Adjust the path if necessary
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
const BACKEND_URL = process.env.BACKEND_URL || `http://localhost:${PORT}`;

const app = express();

// Middleware
const allowedOrigins = [
  "http://localhost:3000", // Localhost for development
  process.env.FRONTEND_URL, // Production frontend
  process.env.BACKEND_URL, // Production backend
  process.env.NEXT_PUBLIC_API_URL, // Next.js frontend
  process.env.NEXT_PUBLIC_BACKEND_URL, // Next.js backend
  process.env.PRODUCTION_BACKEND_URL, // Production backend URL
];

app.listen(PORT, () => {
  console.log(`✅ Server running on ${BACKEND_URL}`);
});

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

// Test database connection route
app.use("/api", testDbRouter);

// Test routes for API
app.get("/", (req, res) => {
  res.send("Welcome to the WelderFind API!");
});
app.get("/api", (req, res) => {
  res.send("Welcome to the WelderFind API!");
});
