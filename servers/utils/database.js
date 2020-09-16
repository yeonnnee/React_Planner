const Sequelize = require("sequelize");
const configs = require("./configs");

const sequelize = new Sequelize(
  configs.database,
  configs.username,
  configs.password,
  {
    dialect: configs.dialect,
    host: configs.host,
    port: configs.port,
  }
);

module.exports = sequelize;
