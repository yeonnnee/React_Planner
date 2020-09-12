const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

///////* 데이터 저장소 *////
const fileLocation = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "tasks.json"
);

//////* 저장된 데이터 불러오기 */////
/////* 인코딩을 지정해주지 않았으므로 fs.readFileSync로 반환된 버퍼를 따로 string으로 변환시킴 *///
function getData() {
  const loadData = fs.readFileSync(fileLocation);
  const data = loadData.toString();
  return data;
}

//////* 데이터 저장하기 */////
function saveData(tasks, res) {
  const content = JSON.stringify(tasks, null, 2);
  fs.writeFile(fileLocation, content, function (err) {
    if (err) {
      res.send("Failed to save data");
    } else {
      res.send("Success");
    }
  });
}

//////* CRUD *//////

router.get("/tasks", (req, res) => {
  const data = getData();
  res.json(data);
});

router.post("/tasks", (req, res) => {
  const data = getData();
  const tasks = JSON.parse(data);

  const text = req.body.tasks.text;
  const id = req.body.tasks.id;
  const status = req.body.tasks.status;

  tasks.push({ id: id, text: text, status: status });
  saveData(tasks, res);
});

/*  부분수정 */
router.patch("/tasks", (req, res) => {
  const data = getData();
  const tasks = JSON.parse(data);
  let target = tasks.find((task) => task.id === req.body.id);
  target.status = req.body.status;

  saveData(tasks, res);
});

/* delete method를 사용하는 대신 put method를 사용하여 해당 리스트를 제외한 목록을 저장함 */
router.put("/tasks", (req, res) => {
  const data = getData();
  const tasks = JSON.parse(data);
  const filtered_tasks = tasks.filter((list) => list.id !== req.body.id);

  saveData(filtered_tasks, res);
});

module.exports = router;
