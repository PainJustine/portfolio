require("dotenv").config();
const mysql = require("mysql2");

const mysqlSettings = process.env.CLEARDB_DATABASE_URL
  ? CLEARDB_DATABASE_URL
  : {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    };

const pool = mysql.createPool(mysqlSettings);
module.exports = pool;
