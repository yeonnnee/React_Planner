const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const Content = require("../models/content");
const Plan = require("../models/plan");
const Task = require("../models/task");
const User = require("../models/user");

exports.postVerification = async (req, res) => {
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
exports.patchPassword = async (req, res) => {
  try {
    const userEmail = req.session.user.email;
    const user = await User.findOne({ where: { email: userEmail } });

    const updatedPassword = req.body.password;
    if (!validationResult(req).isEmpty()) {
      const result = validationResult(req);
      const param = result.errors[0].param;
      const msg = result.errors[0].msg;
      const error = { param: param, msg: msg };

      res.status(400).json(error);
    } else {
      const salt = bcrypt.genSaltSync(16);
      await User.update(
        { ...user, password: bcrypt.hashSync(updatedPassword, salt) },
        { where: { email: userEmail } }
      );
      res.status(201).json({ msg: "Password has changed successfully" });
    }
  } catch (error) {
    throw new Error();
  }
};

exports.postDeleteAccount = async (req, res) => {
  try {
    const user = req.session.user.email;
    const tasks = await Task.findAll({ where: { userId: user } });
    const plans = await Plan.findAll({ where: { writer: user } });

    if (tasks) {
      await Task.destroy({ where: { userId: user } });
    }
    if (plans) {
      for (const plan of plans) {
        await Content.destroy({ where: { planId: plan.id } });
        await Plan.destroy({ where: { id: plan.id } });
      }
    }
    await User.destroy({ where: { email: user } });
    res.status(201).json({ msg: "Account has been deleted successfully" });
  } catch (error) {
    throw new Error();
  }
};
