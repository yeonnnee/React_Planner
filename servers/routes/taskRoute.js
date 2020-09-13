const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasksCon");

router.get("/tasks", tasksController.getTasks);
router.post("/tasks", tasksController.postTasks);
router.patch("/tasks", tasksController.patchTasks);
router.put("/tasks", tasksController.deleteTasks);

module.exports = router;
