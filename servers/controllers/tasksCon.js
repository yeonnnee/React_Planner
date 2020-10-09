const Task = require("../models/task");
const { validationResult } = require("express-validator");

exports.getTasks = async (req, res) => {
  try {
    const user = req.session.user.email;
    const tasks = await Task.findAll({ where: { userId: user } });

    res.status(200).json({ tasks: tasks });
  } catch (error) {
    throw new Error();
  }
};

exports.postTasks = async (req, res) => {
  try {
    const user = req.session.user.email;
    const content = req.body.content;
    const taskId = req.body.id;
    const status = req.body.status;

    if (!validationResult(req).isEmpty()) {
      const result = validationResult(req);
      res.status(400).json({ msg: result.errors[0].msg });
    } else {
      await Task.create({
        id: taskId,
        userId: user,
        content: content,
        status: status,
      });
      res.status(201).json({ msg: "Get data successfully" });
    }
  } catch (error) {
    throw new Error();
  }
};

exports.patchTasks = async (req, res) => {
  try {
    const taskId = req.body.id;
    const updatedStatus = req.body.status;
    const task = await Task.findByPk(taskId);
    await Task.update(
      {
        ...task,
        status: updatedStatus,
      },
      { where: { id: taskId } }
    );

    res.status(201).json({ msg: "Patch data successfully" });
  } catch (error) {
    throw new Error();
  }
};

exports.deleteTasks = async (req, res) => {
  try {
    const taskId = req.body.id;
    await Task.destroy({ where: { id: taskId } });
    res.status(201).json({ msg: "Delete data successfully" });
  } catch (error) {
    throw new Error();
  }
};
