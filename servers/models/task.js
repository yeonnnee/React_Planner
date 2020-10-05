const Sequelize = require("sequelize");
const sequelize = require("./index");

const Task = sequelize.define(
  "task",
  {
    id: {
      type: Sequelize.STRING(36),
      allowNull: false,
      primaryKey: true,
    },
    content: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Task;
