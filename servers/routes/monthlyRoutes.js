const express = require("express");
const router = express.Router();

const monthlyController = require("../controllers/monthlyCon");

router.get("/monthly", monthlyController.getPlans);
router.post("/monthly/add", monthlyController.postPlans);
