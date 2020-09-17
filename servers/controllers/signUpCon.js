const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

exports.postSignUp = async (req, res) => {
  const name = await req.body.user.name;
  const userID = await req.body.user.userID;
  const password = await req.body.user.password;
  const email = await req.body.user.email;

  if (!validationResult(req).isEmpty()) {
    const result = validationResult(req);

    res.json({ msg: result.errors[0].msg });
  } else {
    const salt = bcrypt.genSaltSync(16);
    User.create({
      name: name,
      userID: userID,
      password: bcrypt.hashSync(password, salt),
      email: email,
    });

    res.send("Get data successfully");
  }
};
