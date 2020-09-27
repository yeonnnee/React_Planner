const Plan = require("../models/plan");
const Content = require("../models/content");

exports.getMonthly = async (req, res) => {
  try {
    const user = await req.session.user.email;
    const plans = await Plan.findAll({ where: { userId: user } });
    res.status(200).send(plans);
  } catch (error) {
    throw new Error();
  }
};

exports.postMonthly = async (req, res) => {
  try {
    // const user = await req.session.user;
    // const writer = user.useID;
    const monthlyId = req.body.id;
    const date = req.body.date;
    Plan.create({ id: monthlyId, date: date });
    // res.send("Get data successfully");
    res.status(201).json({ msg: "Get data successfully" });
  } catch (error) {
    throw new Error();
  }
};

exports.postContent = async (req, res) => {
  try {
    const id = req.body.id;
    const text = req.body.text;
    Content.create({ id: id, text: text });
    res.status(201).json({ msg: "Create content successfully" });
  } catch (error) {
    throw new Error();
  }
};
