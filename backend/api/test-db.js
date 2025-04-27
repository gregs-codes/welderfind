const express = require("express");
const db = require("../db"); // Adjust the path to your database connection file

const router = express.Router();

router.get("/test-db", async (req, res) => {
  try {
    const result = await db.query("SELECT 1"); // PostgreSQL returns an object
    const rows = result.rows; // Access the rows property
    res.status(200).json({ success: true, message: "Database connection successful", rows });
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ success: false, message: "Database connection failed", error });
  }
});

module.exports = router;