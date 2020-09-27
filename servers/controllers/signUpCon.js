const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

exports.postSignUp = async (req, res) => {
  try {
    const name = await req.body.name;
    const password = await req.body.password;
    const email = await req.body.email;

    if (!validationResult(req).isEmpty()) {
      const result = validationResult(req);

      res.status(400).json({ msg: result.errors[0].msg });
    } else {
      const salt = bcrypt.genSaltSync(16);
      User.create({
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
