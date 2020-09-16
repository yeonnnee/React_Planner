const fs = require("fs");
const path = require("path");

///////* 데이터 저장소 *////
const fileLocation = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "user.json"
);

module.exports = class User {
  constructor(name, id, password, email) {
    this.name = name;
    this.id = id;
    this.password = password;
    this.email = email;
  }
  static save(user) {
    const userInfo = JSON.stringify(user, null, 2);
    fs.writeFile(fileLocation, userInfo, function (err) {
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
  static add(user) {
    const data = this.fetchAll();
    const users = JSON.parse(data);

    users.push(user);
    this.save(users);
  }
  static delete(userId) {
    const data = this.fetchAll();
    const users = JSON.parse(data);

    const filtered_users = users.filter((user) => user.id !== userId);
    this.save(filtered_users);
  }
};
