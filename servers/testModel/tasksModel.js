const fs = require("fs");
const path = require("path");

///////* 데이터 저장소 *////
const fileLocation = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "tasks.json"
);

module.exports = class Tasks {
  constructor(id, text, status) {
    this.id = id;
    this.text = text;
    this.status = status;
  }
  static save(task) {
    const content = JSON.stringify(task, null, 2);
    fs.writeFile(fileLocation, content, function (err) {
      if (err) {
        console.log("Failed to save data");
      }
    });
  }

  /////* 인코딩을 지정해주지 않았으므로 fs.readFileSync로 반환된 버퍼를 string으로 변환시킴 *///
  static fetchAll() {
    const loadData = fs.readFileSync(fileLocation);
    const data = loadData.toString();
    return data;
  }
  static add(task) {
    const data = this.fetchAll();
    const tasks = JSON.parse(data);

    tasks.push(task);
    this.save(tasks);
  }
  static delete(taskId) {
    const data = this.fetchAll();
    const tasks = JSON.parse(data);

    const filtered_tasks = tasks.filter((list) => list.id !== taskId);
    this.save(filtered_tasks);
  }
  static patch(taskId, taskStatus) {
    const data = this.fetchAll();
    const tasks = JSON.parse(data);

    let target = tasks.find((task) => task.id === taskId);
    target.status = taskStatus;
    this.save(tasks);
  }
};
