const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const Content = require("../models/content");
const Plan = require("../models/plan");
const Task = require("../models/task");
const User = require("../models/user");
const Reason = require("../models/reason");

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
exports.postVerifyEmail = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const user = await User.findOne({ where: { email: userEmail } });
    if (!user) {
      return res.status(400).json({ msg: "존재하지 않는 이메일입니다" });
    } else {
      return res.status(200).json({ msg: "check user existed" });
    }
  } catch (error) {
    throw new Error();
  }
};

exports.patchPassword = async (req, res) => {
  try {
    const userEmail = req.body.user;
    const user = await User.findOne({ where: { email: userEmail } });
    const updatedPassword = req.body.updatedPassword;
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
      res.status(201).json({ msg: "Password has been changed successfully" });
    }
  } catch (error) {
    throw new Error();
  }
};

exports.postDeleteAccount = async (req, res) => {
  try {
    const userEmail = req.session.user.email;

    // 비밀번호 확인
    const user = await User.findOne({ where: { email: userEmail } });
    const password = req.body.password;
    const compared_password = await bcrypt.compare(password, user.password);
    // 비밀번호 일치시 데이터 삭제
    if (compared_password) {
      // task 리스트 삭제
      await Task.destroy({ where: { userId: userEmail } });
      // plan 과 content 삭제
      const plans = await Plan.findAll({ where: { writer: userEmail } });
      if (plans) {
        for (const plan of plans) {
          await Content.destroy({ where: { planId: plan.id } });
          await Plan.destroy({ where: { id: plan.id } });
        }
      }
      // 사유 저장
      await Reason.create({
        deleteReason: req.body.reason,
        account: userEmail,
      });
      // 계정 삭제
      await User.destroy({ where: { email: userEmail } });
      // 세션 삭제
      req.session.destroy();
      res.status(201).json({ msg: "Account has been deleted successfully" });
    } else {
      res.status(400).json({ msg: "비밀번호가 일치하지 않습니다." });
    }
  } catch (error) {
    throw new Error();
  }
};
