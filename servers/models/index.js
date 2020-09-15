const Sequelize = require("sequelize");

const configs = require("../utils/configs");

// const db = {};
const sequelize = new Sequelize(
  configs.database,
  configs.username,
  configs.password,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// db.User = require("./user");

// relationship
module.exports = sequelize;
