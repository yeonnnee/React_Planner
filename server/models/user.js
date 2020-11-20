const Sequelize = require("sequelize");
const sequelize = require("./index");

const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.STRING(36),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(80),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(60),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = User;
