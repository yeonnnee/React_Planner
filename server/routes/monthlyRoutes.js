const express = require("express");
const router = express.Router();

const monthlyController = require("../controllers/monthlyCon");

router.get("/plan", monthlyController.getMonthly);
router.get("/detail/:planId", monthlyController.getDetail);
router.post("/plan/add", monthlyController.postMonthly);
router.post("/plan/edit/:planId", monthlyController.postEditMonthly);
router.post("/plan/:planId", monthlyController.postDeleteMonthly);

module.exports = router;
