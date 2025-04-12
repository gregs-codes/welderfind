import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST, // Your GoDaddy database host
  user: process.env.DB_USER, // Your database username
  password: process.env.DB_PASSWORD, // Your database password
  database: process.env.DB_NAME, // Your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;