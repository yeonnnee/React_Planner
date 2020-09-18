const express = require("express");
const router = express.Router();

const logInCon = require("../controllers/logInCon");

router.post("/logIn", logInCon.postLogIn);

module.exports = router;
