const express = require("express");
const router = express.Router();

const challengeCon = require("../controllers/challengeCon");

router.get("/", challengeCon.getChallenge);
router.post("/record", challengeCon.getChallengeRecord);
router.post("/enrolled", challengeCon.postChallenge);
router.patch("/update", challengeCon.patchChallenge);
router.patch("/check", challengeCon.patchRecord);

module.exports = router;
