const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

exports.postSignUp = async (req, res) => {
  try {
    const name = req.body.name;
    const id = req.body.id;
    const password = req.body.password;
    const email = req.body.email;

    if (!validationResult(req).isEmpty()) {
      const result = validationResult(req);
      const param = result.errors[0].param;
      const msg = result.errors[0].msg;
      const error = { param: param, msg: msg };

      res.status(400).json(error);
    } else {
      const salt = bcrypt.genSaltSync(16);
      await User.create({
        id: id,
        name: name,
        password: bcrypt.hashSync(password, salt),
        email: email,
      });

      res.status(201).json({ msg: "Get data successfully" });
    }
  } catch (error) {
    throw new Error();
  }
};
