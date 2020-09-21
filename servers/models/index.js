const Sequelize = require("sequelize");
const configs = require("../utils/configs");
const User = require("./user");
const Task = require("./task");

const sequelize = new Sequelize(
  configs.database,
  configs.username,
  configs.password,
  {
    dialect: configs.dialect,
    host: configs.host,
    port: null,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Association //
User.hasMany(Task, { foreignKey: "writer", sourceKey: "userID" });
Task.belongsTo(User, { foreignKey: "writer", targetKey: "userID" });

module.exports = sequelize;
