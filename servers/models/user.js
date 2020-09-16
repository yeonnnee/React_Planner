const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const User = sequelize.define(
  "user",
  {
    no: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    userID: {
      type: Sequelize.STRING(20),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);

module.exports = User;
