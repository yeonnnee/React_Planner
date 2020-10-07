const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const MysqlStore = require("express-mysql-session")(session);

const sequelize = require("./models");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//* SESSION *//
const config = require("./utils/configs");

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
const taskRoutes = require("./routes/taskRoutes");
const monthlyRoutes = require("./routes/monthlyRoutes");
const signUpRoutes = require("./routes/signUpRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/user", signUpRoutes);
app.use("/api/monthly", monthlyRoutes);
app.use("/api", taskRoutes);

// Association //
const User = require("./models/user");
const Task = require("./models/task");
const Plan = require("./models/plan");
const Content = require("./models/content");

User.hasMany(Task, { foreignKey: "userId", sourceKey: "email" });
User.hasMany(Plan, { foreignKey: "writer", sourceKey: "email" });
Task.belongsTo(User, { foreignKey: "userId", targetKey: "email" });
Plan.belongsTo(User, { foreignKey: "writer", targetKey: "email" });
Plan.hasMany(Content, { foreignKey: "planId", sourceKey: "id" });
Content.belongsTo(Plan, { foreignKey: "planId", sourceKey: "id" });

const driver = async () => {
  await sequelize.sync();
};
driver();

app.listen(3001, () => console.log("hello from the server"));
