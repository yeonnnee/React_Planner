const Plan = require("../models/plan");
const Content = require("../models/content");

exports.getMonthly = async (req, res) => {
  try {
    const user = req.session.user.email;
    const plans = await Plan.findAll({ where: { writer: user } });
    let monthly = [];

    for (const plan of plans) {
      const contents = await Content.findAll({ where: { planId: plan.id } });
      const result = {
        id: plan.dataValues.id,
        date: plan.dataValues.date,
        contents,
      };
      monthly.push(result);
    }

    res.status(200).json({ monthly: monthly });
  } catch (error) {
    throw new Error();
  }
};

exports.postMonthly = async (req, res) => {
  try {
    // Plan 생성 //
    const user = req.session.user.email;
    const planId = req.body.id;
    const date = req.body.date;
    await Plan.create({ id: planId, date: date, writer: user });

    // Content 생성 //
    const contents = req.body.contents;

    for (const content of contents) {
      await Content.create({
        id: content.id,
        text: content.text,
        planId: planId,
      });
    }

    res.status(201).json({ msg: "Get data successfully" });
  } catch (error) {
    throw new Error();
  }
};
