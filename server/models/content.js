const Sequelize = require("sequelize");
const sequelize = require("./index");

const Content = sequelize.define(
  "contents",
  {
    id: {
      type: Sequelize.STRING(36),
      allowNull: false,
      primaryKey: true,
    },
    text: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    time: {
      type: Sequelize.STRING(5),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Content;
