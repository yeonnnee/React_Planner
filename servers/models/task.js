const Sequelize = require("sequelize");
const sequelize = require("./index");

const Task = sequelize.define(
  "task",
  {
    id: {
      type: Sequelize.STRING(36),
      allowNull: false,
    },
    writer: {
      type: Sequelize.STRING(20),
      allowNull: false,
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
    timestamps: true,
  }
);

module.exports = Task;
