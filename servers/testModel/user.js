const Sequelize = require("sequelize");
const sequelize = require(".");

const User = sequelize.define(
  "user",
  {
    // no: {
    //   type: DataTypes.INTEGER(4).UNSIGNED.ZEROFILL,
    //   autoIncrement: true,
    //   allowNull: false,
    //   primarykey: true,
    // },
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
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      deffaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
