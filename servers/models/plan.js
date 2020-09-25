const Sequelize = require("sequelize");
const sequelize = require("./index");

const Plan = sequelize.define(
  "plans",
  {
    date: {
      type: Sequelize.STRING(16),
      allowNull: false,
    },
    writer: {
      type: Sequelize.STRING(15),
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Plan;
