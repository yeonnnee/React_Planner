const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const MysqlStore = require("express-mysql-session")(session);

const sequelize = require("./models");
const config = require("./utils/configs");
const taskRoutes = require("./routes/taskRoutes");
const monthlyRoutes = require("./routes/monthlyRoutes");
const signUpRoutes = require("./routes/signUpRoutes");
const authRoutes = require("./routes/authRoutes");
const User = require("./models/user");
const Task = require("./models/task");
const Plan = require("./models/plan");
const Content = require("./models/content");

const app = express();
sequelize.sync();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//* SESSION *//
app.use(
  session({
    secret: config.session_secret,
    resave: false,
    saveUninitialized: false,
    store: new MysqlStore({
      host: config.host,
      user: config.username,
      password: config.password,
      database: config.database,
    }),
  })
);

// ROUTES //
app.use("/api/auth", authRoutes);
app.use("/api/user", signUpRoutes);
app.use("/api/monthly", monthlyRoutes);
app.use("/api", taskRoutes);

// Association //
User.hasMany(Task, { foreignKey: "writer", sourceKey: "userID" });
User.hasMany(Plan, { foreignKey: "writer", sourceKey: "userID" });
Task.belongsTo(User, { foreignKey: "writer", targetKey: "userID" });
Plan.belongsTo(User, { foreignKey: "writer", targetKey: "userID" });
Plan.hasMany(Content, { foreignKey: "date", sourceKey: "date" });
Content.belongsTo(Plan, { foreignKey: "date", sourceKey: "date" });

const driver = async () => {
  await sequelize.sync();
};
driver();

app.listen(3001, () => console.log("hello from the server"));
