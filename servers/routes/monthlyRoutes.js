const express = require("express");
const router = express.Router();

const monthlyController = require("../controllers/monthlyCon");

router.get("/plan", monthlyController.getMonthly);
router.post("/plan/add", monthlyController.postMonthly);
router.post("/plan/edit/:planId", monthlyController.patchEditMonthly);

module.exports = router;
