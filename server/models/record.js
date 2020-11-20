const Sequelize = require("sequelize");
const sequelize = require("./index");

const Record = sequelize.define(
  "records",
  {
    day: {
      type: Sequelize.STRING(6),
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING(7),
      allowNull: true,
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

module.exports = Record;
