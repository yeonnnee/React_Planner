require("dotenv").config();

const configs = {
  development: {
    username: process.env.DATABASE_DEV_USER_NAME,
    password: process.env.DATABASE_DEV_PW,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_DEV_HOST,
    port: process.env.PORT,
    dialect: process.env.DATABASE_DIALECT,
    session_secret: process.env.SESSION_SECRET,
  },
  production: {
    username: process.env.DATABASE_PROD_USER_NAME,
    password: process.env.DATABASE_PROD_PW,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_PROD_HOST,
    port: process.env.PORT,
    dialect: process.env.DATABASE_DIALECT,
    session_secret: process.env.SESSION_SECRET,
    logging: false,
  },
};

module.exports = configs;
