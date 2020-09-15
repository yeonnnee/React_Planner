require("dotenv").config();

const configs = {
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER_NAME,
  password: process.env.DATABASE_PW,
};

module.exports = configs;
