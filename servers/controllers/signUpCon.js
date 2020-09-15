const User = require("../models/test");
const { validationResult } = require("express-validator");

exports.getData = (req, res) => {
  const data = User.fetchAll();
  res.json(data);
};

exports.postSignUp = (req, res) => {
  const name = req.body.user.name;
  const id = req.body.user.id;
  const password = req.body.user.password;
  // const confr = req.body.user.password;

  const email = req.body.user.email;
  const user = new User(name, id, password, email);

  if (!validationResult(req).isEmpty()) {
    const result = validationResult(req);
    console.log(result);
    // let messages = [];
    // for (let i = 0; i < result.errors.length; i++) {
    //   messages.push(result.errors[i].msg);
    // }

    res.json({ msg: result.errors[0].msg });
  } else {
    User.add(user);
    res.send("Get data successfully");
  }
};

exports.deleteTasks = (req, res) => {
  const userId = req.body.id;
  User.delete(userId);
  res.send("Delete data successfully");
};
