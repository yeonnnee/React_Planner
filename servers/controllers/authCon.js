/* eslint-disable require-atomic-updates */
const bcrypt = require("bcryptjs");

const User = require("../models/user");

exports.postLogIn = async (req, res) => {
  const userID = await req.body.userID;
  const user = await User.findOne({ where: { userID: userID } });
  if (!user) {
    return res.send("존재하지 않는 아이디 입니다");
  }

  const password = await req.body.password;
  const compared_Password = await bcrypt.compare(password, user.password);
  if (compared_Password) {
    req.session.isLoggedIn = true;
    req.session.user = user;
    req.session.save();
    res.send("logged In successfully");
  } else {
    return res.send("비밀번호와 아이디가 일치하지 않습니다");
  }
};

exports.postLogOut = async (req, res) => {
  try {
    req.session.destroy();
    res.send("User logged out");
  } catch (error) {
    res.send(error);
  }
};
