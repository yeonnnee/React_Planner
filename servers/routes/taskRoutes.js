const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const tasksController = require("../controllers/tasksCon");

router.get("/tasks", tasksController.getTasks);
router.post(
  "/tasks",
  [
    body("tasks.content")
      .isLength({ max: 20 })
      .withMessage("입력 가능한 글자수를 초과하였습니다 (20자 내외)"),
  ],
  tasksController.postTasks
);
router.patch("/tasks", tasksController.patchTasks);
router.put("/tasks", tasksController.deleteTasks);

module.exports = router;
