const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const tasks = [];

const fileLocation = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "tasks.json"
);

router.get("/tasks", (req, res) => {
  const data = fs.readFileSync(fileLocation);
  const tasks = data.toString();
  res.json(tasks);
});

router.post("/tasks", (req, res) => {
  console.log(req.body);
  const text = req.body.tasks.text;
  const id = req.body.tasks.id;

  tasks.push({ text: text, id: id });
  const content = JSON.stringify(tasks);
  console.log(tasks);
  fs.writeFile(fileLocation, content, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send({ tasks: { text: text, id: id } });
    }
  });
});

module.exports = router;
