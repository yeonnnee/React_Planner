const bcrypt = require("bcryptjs");

const User = require("../models/user");

exports.postLogIn = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const user = await User.findOne({ where: { email: userEmail } });
    if (!user) {
      return res.status(400).json({ msg: "존재하지 않는 이메일 입니다" });
    }

    const password = req.body.password;
    const session = req.session;
    const compared_Password = await bcrypt.compare(password, user.password);

    if (compared_Password) {
      session.isLoggedIn = true;
      session.user = user;
      session.save();
      res.status(200).json({ msg: "logged In successfully" });
    } else {
      return res
        .status(400)
        .json({ msg: "아이디와 비밀번호가 일치하지 않습니다" });
    }
  } catch (error) {
    throw new Error();
  }
};

exports.checkAuth = (req, res) => {
  try {
    const session = req.session;
    const user = session.user;
    if (!user) {
      res.status(401).json({ msg: "Login needed" });
    } else {
      const ret = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      res.status(200).json({ user: ret });
    }
  } catch (error) {
    throw new Error();
  }
};

exports.postLogOut = (req, res) => {
  try {
    req.session.destroy();
    res.status(200).json({ msg: "User logged out" });
  } catch (error) {
    throw new Error();
  }
};
