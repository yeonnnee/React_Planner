const express = require("express");
const router = express.Router();

const tasksValidation = require("./validations/tasksValidation");
const tasksController = require("../controllers/tasksCon");

router.get("/tasks", tasksController.getTasks);
router.post("/tasks", tasksValidation, tasksController.postTasks);
router.patch("/tasks", tasksController.patchTasks);
router.put("/tasks", tasksController.deleteTasks);

module.exports = router;
