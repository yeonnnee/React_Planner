const express = require("express");
const router = express.Router();

const accountCon = require("../controllers/accountCon");
const accountValidation = require("./validations/accountValidation");

router.patch("/change/password", accountValidation, accountCon.patchPassword);
router.post("/delete", accountCon.postDeleteAccount);
router.post("/verification", accountCon.postVerification);

module.exports = router;
