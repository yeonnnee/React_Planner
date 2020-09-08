const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const fileLocation = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "tasks.json"
);

function getData() {
  const loadData = fs.readFileSync(fileLocation);
  const data = loadData.toString();
  return data;
}

function saveData(tasks, res) {
  const content = JSON.stringify(tasks, null, 2);
  fs.writeFile(fileLocation, content, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send("has successfully received");
    }
  });
}

router.get("/tasks", (req, res) => {
  const data = getData();
  res.json(data);
});

router.post("/tasks", (req, res) => {
  const data = getData();
  const tasks = JSON.parse(data);
  const text = req.body.tasks.text;
  const id = req.body.tasks.id;

  tasks.push({ text: text, id: id });
  saveData(tasks, res);
});

module.exports = router;
