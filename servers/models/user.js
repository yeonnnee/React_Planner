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
      validate: {
        isIn: {
          args: [["^[a-z]+$", "!", "#", "*"], ["en"], [0 - 9]],
          msg: "유효하지 않은 문자가 포함되어있습니다.",
        },
        isAlpha: false,
      },
    },
    userID: {
      type: Sequelize.STRING(20),
      allowNull: false,
      unique: true,
      validate: {
        isIn: {
          args: [["^[a-z]+$", "!", "#", "*"], ["kr"]],
          msg: "아이디는 영문과 숫자로만 구성되어야 합니다.",
        },
        isLowercase: true,
        isAlpha: true,
        isFloat: true,
      },
    },
    password: {
      type: Sequelize.STRING(20),
      allowNull: false,
      validate: {
        notIn: {
          args: [["A-Z"], ["a-z"], "!", "?", "^", "(", ")", [0 - 9]],
          msg: "비밀번호는 영문 대소문자와 숫자, 특수문자가 포함되어야 합니다",
        },
        isAlpha: true,
        isInL: {
          args: ["kr"],
          msg: "비밀번호는 영문 대소문자와 숫자, 특수문자가 포함되어야 합니다",
        },
      },
    },
    email: {
      type: Sequelize.STRING(20),
      allowNull: false,
      validate: {
        notIn: {
          args: ["gmail", "hanmail", "naver"],
          msg: "유효하지 않은 이메일입니다.",
        },
      },
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
