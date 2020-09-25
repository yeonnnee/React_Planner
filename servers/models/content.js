const Sequelize = require("sequelize");
const sequelize = require("./index");

const Content = sequelize.define(
  "contents",
  {
    id: {
      type: Sequelize.STRING(36),
      allowNull: false,
    },
    text: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Content;
