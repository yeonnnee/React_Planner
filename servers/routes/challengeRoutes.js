const express = require("express");
const router = express.Router();

const challengeCon = require("../controllers/challengeCon");

router.get("/", challengeCon.getChallenge);
router.post("/enrolled", challengeCon.postChallenge);
router.patch("/update", challengeCon.patchChallenge);

module.exports = router;
