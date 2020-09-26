const bcrypt = require("bcryptjs");

const User = require("../models/user");

exports.postLogIn = async (req, res) => {
  const userID = await req.body.userID;
  const user = await User.findOne({ where: { userID: userID } });
  if (!user) {
    return res.status(400).json({ msg: "존재하지 않는 아이디 입니다" });
  }

  const password = await req.body.password;
  const session = await req.session;
  const compared_Password = await bcrypt.compare(password, user.password);
  if (compared_Password) {
    session.isLoggedIn = true;
    session.user = user;
    session.save();
    res.status(200).json({ msg: "logged In successfully" });
  } else {
    return res.status(400).send("아이디와 비밀번호가 일치하지 않습니다");
  }
};

exports.checkLogin = async (req, res) => {
  const user = req.session;
  if (!user) {
    res.status(401).json({ msg: "Login needed" });
  }

  const ret = {
    id: user.id,
    name: user.name,
    eamil: user.email,
  };

  res.json({ user: ret });
};

exports.postLogOut = async (req, res) => {
  try {
    req.session.destroy();
    res.status(200).json({ msg: "User logged out" });
  } catch (error) {
    throw new Error();
  }
};
