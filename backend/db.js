// backend/db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: 'dpg-d067ij1r0fns73fb56d0-a.oregon-postgres.render.com',
  port: 5432,
  user: 'admin5678',
  password: 'DRBrRkGfKFS5CxgJ5Pti4spod8zHUGWi',
  database: 'fixit5678',
  ssl: {
    rejectUnauthorized: false, // Important for Render.com's SSL
  },
});

module.exports = pool;
