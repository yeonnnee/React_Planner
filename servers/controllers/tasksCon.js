const Task = require("../models/task");
const { validationResult } = require("express-validator");

exports.getTasks = async (req, res) => {
  try {
    const userID = await req.session.user.userID;
    const tasks = await Task.findAll({ where: { writer: userID } });

    res.status(200).send(tasks);
  } catch (error) {
    throw new Error();
  }
};

exports.postTasks = async (req, res) => {
  try {
    const user = await req.session.user;
    const writer = await user.userID;
    const content = await req.body.tasks.content;
    const taskId = await req.body.tasks.id;
    const status = await req.body.tasks.status;

    if (!validationResult(req).isEmpty()) {
      const result = validationResult(req);
      res.status(400).json({ msg: result.errors[0].msg });
    } else {
      Task.create({
        id: taskId,
        writer: writer,
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
    const updatedStatus = await req.body.status;
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
    const taskId = await req.body.id;
    Task.destroy({ where: { id: taskId } });
    res.status(201).json({ msg: "Delete data successfully" });
  } catch (error) {
    throw new Error();
  }
};
