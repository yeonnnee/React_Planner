const Sequelize = require("sequelize");
const configs = require("../config/config");

let sequelize;
if (process.env.NODE_ENV === "prodcution") {
  sequelize = new Sequelize(
    configs.production.database,
    configs.production.username,
    configs.production.password,
    {
      dialect: configs.production.dialect,
      host: configs.production.host,
      port: configs.production.port,
    }
  );
} else {
  sequelize = new Sequelize(
    configs.development.database,
    configs.development.username,
    configs.development.password,
    {
      dialect: configs.development.dialect,
      host: configs.development.host,
      port: configs.development.port,
    }
  );
}

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
