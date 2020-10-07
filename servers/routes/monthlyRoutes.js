const express = require("express");
const router = express.Router();

const monthlyController = require("../controllers/monthlyCon");

router.get("/plan", monthlyController.getMonthly);
router.post("/plan/add", monthlyController.postMonthly);

module.exports = router;
