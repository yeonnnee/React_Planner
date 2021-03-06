const mysql = require("mysql2");
const configs = require("./configs");

const pool = mysql.createPool({
  host: configs.host,
  user: configs.username,
  database: configs.database,
  password: configs.password,
  port: configs.port,
});

pool.getConnection(function (err, connection) {
  if (!err) {
    connection.query("SELECT * FROM users", function (error, result) {
      if (error) {
        console.log(error);
        throw error;
      } else {
        console.log(result);
        connection.release();
      }
    });
  }
});

module.exports = pool;
