const Task = require("../models/tasksModel");

exports.getTasks = (req, res) => {
  const data = Task.fetchAll();
  res.json(data);
};

exports.postTasks = (req, res) => {
  const text = req.body.tasks.text;
  const id = req.body.tasks.id;
  const status = req.body.tasks.status;
  const task = new Task(id, text, status);

  Task.add(task);
  res.send("Get data successfully");
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
