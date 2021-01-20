const Plan = require("../models/plan");
const Content = require("../models/content");
const sequelize = require("../models");

exports.getMonthly = async (req, res) => {
  try {
    const user = req.session.user.email;

    await sequelize.transaction(async (t) => {
      const plans = await Plan.findAll(
        { where: { writer: user } },
        { transaction: t }
      );

      let monthly = [];
      for (let plan of plans) {
        const contents = await Content.findAll(
          { where: { planId: plan.id } },
          { transaction: t }
        );
        const result = {
          id: plan.id,
          date: plan.date,
          contents,
        };
        monthly.push(result);
      }

      res.status(200).json({ monthly: monthly });
    });
  } catch (error) {
    if (error.name === "SequelizeDatabaseError") {
      res.status(400).json({ msg: "Something went wrong" });
    } else {
      throw new Error();
    }
  }
};
exports.getDetail = async (req, res) => {
  try {
    await sequelize.transaction(async (t) => {
      const planId = req.params.planId;
      const plan = await Plan.findByPk(planId);

      const contents = await Content.findAll(
        {
          where: { planId: planId },
        },
        { transaction: t }
      );
      const result = {
        id: plan.id,
        date: plan.date,
        contents,
      };

      res.status(200).json({ monthly: result });
    });
  } catch (error) {
    throw new Error();
  }
};
exports.postMonthly = async (req, res) => {
  try {
    await sequelize.transaction(async (t) => {
      // Plan 생성 //
      const user = req.session.user.email;
      const planId = req.body.id;
      const date = req.body.date;
      await Plan.create(
        { id: planId, date: date, writer: user },
        { transaction: t }
      );

      // Content 생성 //
      const contents = req.body.contents;

      for (const content of contents) {
        await Content.create(
          {
            id: content.id,
            text: content.text,
            planId: planId,
          },
          { transaction: t }
        );
      }
      res.status(201).json({ msg: "Get data successfully" });
    });
  } catch (error) {
    if (error.name === "SequelizeDatabaseError") {
      res.status(400).json({ msg: "Something went wrong" });
    } else {
      throw new Error();
    }
  }
};

exports.postEditMonthly = async (req, res) => {
  try {
    await sequelize.transaction(async (t) => {
      const planId = req.body.id;
      const updatedContents = req.body.contents;
      await Content.destroy({ where: { planId: planId } }, { transaction: t });

      for (const content of updatedContents) {
        await Content.create(
          {
            id: content.id,
            text: content.text,
            planId: planId,
          },
          { transaction: t }
        );
      }
      res.status(201).json({ msg: "Patch Data Successfully" });
    });
  } catch (error) {
    if (error.name === "SequelizeDatabaseError") {
      res.status(400).json({ msg: "Something went wrong" });
    } else {
      throw new Error();
    }
  }
};

exports.postDeleteMonthly = async (req, res) => {
  try {
    await sequelize.transaction(async (t) => {
      const planId = req.body.id;
      await Content.destroy({ where: { planId: planId } }, { transaction: t });
      await Plan.destroy({ where: { id: planId } }, { transaction: t });

      res.status(201).json({ msg: "Delete Data Successfully" });
    });
  } catch (error) {
    if (error.name === "SequelizeDatabaseError") {
      res.status(400).json({ msg: "Something went wrong" });
    } else {
      throw new Error();
    }
  }
};
