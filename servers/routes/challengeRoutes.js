const express = require("express");
const router = express.Router();

const challengeCon = require("../controllers/challengeCon");

router.get("/", challengeCon.getChallenge);
router.post("/enrolled", challengeCon.postChallenge);

module.exports = router;
