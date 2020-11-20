const Sequelize = require("sequelize");
const sequelize = require("./index");

const Plan = sequelize.define(
  "plans",
  {
    id: {
      type: Sequelize.STRING(36),
      allowNull: false,
      primaryKey: true,
    },
    date: {
      type: Sequelize.STRING(16),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Plan;
