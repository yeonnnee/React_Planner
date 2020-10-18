const Sequelize = require("sequelize");
const sequelize = require("./index");

const Reason = sequelize.define(
  "reason",
  {
    deleteReason: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Reason;
