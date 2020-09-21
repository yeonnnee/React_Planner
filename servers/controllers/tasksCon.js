const Task = require("../models/task");
const { validationResult } = require("express-validator");

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.send(error);
  }
};

exports.postTasks = async (req, res) => {
  const text = await req.body.tasks.text;
  const id = req.body.tasks.id;
  const status = req.body.tasks.status;

  if (!validationResult(req).isEmpty()) {
    const result = validationResult(req);
    res.json({ error: "Text Length Problem", msg: result.errors[0].msg });
  } else {
    req.user.createTask({
      id: id,
      content: text,
      status: status,
    });
    res.send("Get data successfully");
  }
};

exports.patchTasks = async (req, res) => {
  try {
    const taskId = req.body.id;
    const updatedStatus = await req.body.status;
    const task = await Task.findByPk(taskId);
    await Task.update(
      {
        ...task,
        status: updatedStatus,
      },
      { where: { id: taskId } }
    );

    res.send("Patch data successfully");
  } catch (error) {
    res.send("Patching data failed");
  }
};

exports.deleteTasks = async (req, res) => {
  try {
    const taskId = req.body.id;
    await Task.destroy({ where: { id: taskId, userID: req.user.userID } });
    res.send("Delete data successfully");
  } catch (error) {
    res.send("Deleting data failed");
  }
};
