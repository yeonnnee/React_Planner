const Sequelize = require("sequelize");
const sequelize = require("./index");

const Record = sequelize.define("records", {
  id: {
    type: Sequelize.STRING(36),
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
});

module.exports = Record;
