const Challenge = require("../models/challenge");

exports.getChallenge = async (req, res) => {
  try {
    const user = req.session.user.email;
    const challenges = await Challenge.findAll({ where: { challenger: user } });
    res.status(200).json({ challenges: challenges });
  } catch (error) {
    throw new Error();
  }
};
