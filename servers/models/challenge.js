const Sequelize = require("sequelize");
const sequelize = require("./index");

const Challenge = sequelize.define(
  "challenges",
  {
    id: {
      type: Sequelize.STRING(36),
      allowNull: false,
      primaryKey: true,
    },
    title: { type: Sequelize.STRING(20), allowNull: false },
    status: { type: Sequelize.STRING(8), allowNull: false },
    achievement: { type: Sequelize.STRING(4), allowNull: true },
  },
  {
    timestamps: true,
    paranoid: false,
  }
);

module.exports = Challenge;
