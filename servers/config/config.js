require("dotenv").config();

const configs = {
  development: {
    username: process.env.DATABASE_USER_NAME,
    password: process.env.DATABASE_PW,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DATABASE_DIALECT,
    session_secret: process.env.SESSION_SECRET,
  },
  production: {
    username: process.env.DATABASE_USER_NAME,
    password: process.env.DATABASE_PW,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DATABASE_DIALECT,
    session_secret: process.env.SESSION_SECRET,
    logging: false,
  },
};

module.exports = configs;
