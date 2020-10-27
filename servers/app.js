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
const accountRoutes = require("./routes/accountRoutes");
const challengeRoutes = require("./routes/challengeRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/user", signUpRoutes);
app.use("/api/monthly", monthlyRoutes);
app.use("/api/Account", accountRoutes);
app.use("/api/challenge", challengeRoutes);
app.use("/api", taskRoutes);

// Association //
const User = require("./models/user");
const Task = require("./models/task");
const Plan = require("./models/plan");
const Content = require("./models/content");
const Reason = require("./models/reason");
const Challenge = require("./models/challenge");
const Record = require("./models/record");

User.hasMany(Task, { foreignKey: "userId", sourceKey: "email" });
User.hasOne(Reason, { foreignKey: "account", sourceKey: "email" });
User.hasMany(Plan, { foreignKey: "writer", sourceKey: "email" });
User.hasMany(Challenge, { foreignKey: "challenger", sourceKey: "email" });
Reason.belongsTo(User);
Task.belongsTo(User, { foreignKey: "userId", targetKey: "email" });
Plan.belongsTo(User, { foreignKey: "writer", targetKey: "email" });
Plan.hasMany(Content, { foreignKey: "planId", sourceKey: "id" });
Content.belongsTo(Plan, { foreignKey: "planId", sourceKey: "id" });
Challenge.hasMany(Record, { foreignKey: "challengeTitle", sourceKey: "title" });
Challenge.belongsTo(User, { foreignKey: "challenger", targetKey: "email" });
Record.belongsTo(Challenge, {
  foreignKey: "challengeTitle",
  targetKey: "title",
});

const driver = async () => {
  await sequelize.sync();
};
driver();

app.listen(3001, () => console.log("hello from the server"));
