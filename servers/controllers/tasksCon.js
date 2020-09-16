const Task = require("../testModel/tasksModel");
const { validationResult } = require("express-validator");

exports.getTasks = (req, res) => {
  const data = Task.fetchAll();
  res.json(data);
};

exports.postTasks = (req, res) => {
  const text = req.body.tasks.text;
  const id = req.body.tasks.id;
  const status = req.body.tasks.status;
  const task = new Task(id, text, status);

  if (!validationResult(req).isEmpty()) {
    const result = validationResult(req);
    res.json({ error: "Text Length Problem", msg: result.errors[0].msg });
  } else {
    Task.add(task);
    res.send("Get data successfully");
  }
};

exports.patchTasks = (req, res) => {
  const id = req.body.id;
  const status = req.body.status;
  Task.patch(id, status);
  res.send("Patch data successfully");
};

exports.deleteTasks = (req, res) => {
  const taskId = req.body.id;
  Task.delete(taskId);
  res.send("Delete data successfully");
};
