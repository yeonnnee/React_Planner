const express = require("express");
const router = express.Router();

const signUpValidation = require("./validations/signUpValidation");
const signUpCon = require("../controllers/signUpCon");

router.post("/signUp", signUpValidation, signUpCon.postSignUp);

module.exports = router;
