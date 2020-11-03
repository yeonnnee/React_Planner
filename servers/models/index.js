const Sequelize = require("sequelize");
const configs = require("../utils/configs");

let sequelize;

sequelize = new Sequelize(
  configs.database,
  configs.username,
  configs.password,
  {
    dialect: configs.dialect,
    host: configs.host,
    port: configs.port,
  }
);
// }

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
