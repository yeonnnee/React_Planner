const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const Content = require("../models/content");
const Plan = require("../models/plan");
const Task = require("../models/task");
const User = require("../models/user");

exports.postCheckUser = async (req, res) => {
  try {
    const session = req.session;
    const userEmail = session.user.email;
    const user = await User.findOne({ where: { email: userEmail } });

    const password = req.body.password;
    const compared_password = await bcrypt.compare(password, user.password);
    if (compared_password) {
      res.status(200).json({ msg: "Checked User" });
    } else {
      res.status(400).json({ msg: "비밀번호가 일치하지 않습니다." });
    }
  } catch (error) {
    throw new Error();
  }
};
