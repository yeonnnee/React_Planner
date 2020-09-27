const { body } = require("express-validator");

const tasksValidation = [
  body("tasks.content")
    .isLength({ max: 20 })
    .withMessage("입력 가능한 글자수를 초과하였습니다 (20자 내외)"),
];

module.exports = tasksValidation;
