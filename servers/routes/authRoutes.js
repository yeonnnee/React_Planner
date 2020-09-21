const express = require("express");
const router = express.Router();

const authCon = require("../controllers/authCon");

router.post("/logIn", authCon.postLogIn);
router.post("/logOut", authCon.postLogOut);

module.exports = router;
