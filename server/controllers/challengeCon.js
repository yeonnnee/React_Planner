const sequelize = require("../models");
const Challenge = require("../models/challenge");
const Record = require("../models/record");

exports.getChallenge = async (req, res) => {
  try {
    await sequelize.transaction(async (t) => {
      const user = req.session.user.email;
      const challenges = await Challenge.findAll(
        { where: { challenger: user } },
        { transaction: t }
      );

      let challengeList = [];

      for (const challenge of challenges) {
        const records = await Record.findAll(
          {
            where: { challengeTitle: challenge.title },
          },
          { transaction: t }
        );

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
    await sequelize.transaction(async (t) => {
      const user = req.session.user.email;
      const title = req.body.title;
      const id = req.body.id;
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
    throw new Error();
  }
};

exports.patchChallenge = async (req, res) => {
  try {
    await sequelize.transaction(async (t) => {
      const challengeId = req.body.id;
      const challenge = await Challenge.findByPk(challengeId);
      const records = await Record.findAll(
        {
          where: { challengeTitle: challenge.title },
        },
        { transaction: t }
      );
      const success = records.filter((record) => record.status === "CHECKED");
      const percentage = (success.length / 30) * 100;
      await Challenge.update(
        {
          ...challenge,
          status: "FINISHED",
          achievement: Math.round(percentage) + "%",
        },
        { where: { id: challengeId } },
        { transaction: t }
      );
      res.status(201).json({ msg: "Patch data successfully" });
    });
  } catch (error) {
    throw new Error();
  }
};

exports.patchRecord = async (req, res) => {
  try {
    await sequelize.transaction(async (t) => {
      const recordId = req.body.record;
      const record = await Record.findByPk(recordId);
      await Record.update(
        {
          ...record,
          status: "CHECKED",
        },
        { where: { id: recordId } },
        { transaction: t }
      );
      const result = await Record.findByPk(recordId);

      res.status(201).json({ updatedRecord: result });
    });
  } catch (error) {
    throw new Error();
  }
};

exports.getChallengeRecord = async (req, res) => {
  try {
    await sequelize.transaction(async (t) => {
      const challengeId = req.params.id;
      const challenge = await Challenge.findByPk(challengeId);
      const challengeRecord = await Record.findAll(
        {
          where: { challengeTitle: challenge.title },
        },
        { transaction: t }
      );
      const result = {
        id: challenge.id,
        title: challenge.title,
        status: challenge.status,
        achievement: challenge.achievement,
        record: challengeRecord,
      };

      res.status(200).json({ challenge: result });
    });
  } catch (error) {
    throw new Error();
  }
};

exports.deleteChallenge = async (req, res) => {
  try {
    await sequelize.transaction(async (t) => {
      const challengeId = req.body.id;
      const challenge = await Challenge.findByPk(challengeId);
      await Challenge.destroy(
        { where: { id: challengeId } },
        { transaction: t }
      );
      await Record.destroy(
        { where: { challengeTitle: challenge.title } },
        { transaction: t }
      );
      await res.status(201).json({ msg: "Deleted challenge successfully" });
    });
  } catch (error) {
    throw new Error();
  }
};
