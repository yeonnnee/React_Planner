const express = require("express");
const router = express.Router();

const authCon = require("../controllers/authCon");

router.post("/logIn", authCon.postLogIn);

module.exports = router;
