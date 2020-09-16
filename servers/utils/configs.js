const dotenv = require("dotenv");
dotenv.config();

const configs = {
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER_NAME,
  password: process.env.DATABASE_PW,
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  session_secret: process.env.SESSION_SECRET,
};

module.exports = configs;
