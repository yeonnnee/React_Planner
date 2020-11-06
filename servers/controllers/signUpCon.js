const User = require("../models/user");
const sequelize = require("../models");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

exports.postSignUp = async (req, res) => {
  try {
    const name = req.body.name;
    const id = req.body.id;
    const password = req.body.password;
    const email = req.body.email;

    await sequelize.transaction(async (t) => {
      const checkExisted = await User.findOne(
        { where: { email: email } },
        { transaction: t }
      );
      if (checkExisted) {
        return res
          .status(400)
          .json({ param: "email", msg: "이미 존재하는 이메일입니다" });
      }
      if (!validationResult(req).isEmpty()) {
        const result = validationResult(req);
        const param = result.errors[0].param;
        const msg = result.errors[0].msg;
        const error = { param: param, msg: msg };

        res.status(400).json(error);
      } else {
        const salt = bcrypt.genSaltSync(16);
        await User.create(
          {
            id: id,
            name: name,
            password: bcrypt.hashSync(password, salt),
            email: email,
          },
          { transaction: t }
        );

        res.status(201).json({ msg: "Get data successfully" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
