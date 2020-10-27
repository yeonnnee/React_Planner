const sequelize = require("../models");
const Challenge = require("../models/challenge");
const Record = require("../models/record");

exports.getChallenge = async (req, res) => {
  try {
    const user = req.session.user.email;

    await sequelize.transaction(async (t) => {
      const challenges = await Challenge.findAll(
        { where: { challenger: user } },
        { transaction: t }
      );

      let challengeList = [];

      for (const challenge of challenges) {
        const records = await Record.findAll({
          where: { challengeTitle: challenge.title },
        });

        const result = {
          id: challenge.id,
          title: challenge.title,
          status: challenge.status,
          achievement: challenge.achievement,
          record: records,
        };
        challengeList.push(result);
      }
      res.status(200).json({ challenges: challengeList });
    });
  } catch (error) {
    throw new Error();
  }
};

exports.postChallenge = async (req, res) => {
  try {
    const user = req.session.user.email;
    const title = req.body.title;
    const id = req.body.id;

    await sequelize.transaction(async (t) => {
      await Challenge.create(
        {
          id: id,
          title: title,
          status: "ENROLLED",
          challenger: user,
        },
        { transaction: t }
      );
      const today = new Date();
      const date = +today.toString().split(" ")[2];

      for (let i = 1; i < 31; i++) {
        const day = new Date();
        day.setDate(`${date + i}`);

        await Record.create(
          {
            day: `DAY-${i}`,
            date: day.toString().substring(0, 15),
            challengeTitle: title,
          },
          { transaction: t }
        );
      }
      res.status(201).json({ msg: "Enrolled challenge successfully" });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.patchChallenge = async (req, res) => {
  try {
    const challengeId = req.body.id;
    const challenge = await Challenge.findByPk(challengeId);
    const records = await Record.findAll({
      where: { challengeTitle: challenge.title },
    });
    const success = records.filter((record) => record.status === "CHECKED");
    const percentage = (success.length / 30) * 100;
    await Challenge.update(
      {
        ...challenge,
        status: "FINISHED",
        achievement: Math.round(percentage) + "%",
      },
      { where: { id: challengeId } }
    );
    res.status(201).json({ msg: "Patch data successfully" });
  } catch (error) {
    throw new Error();
  }
};
