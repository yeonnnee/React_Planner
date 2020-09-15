const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// const { sequelize } = require("./models");
// const { configs } = require("../utils/configs");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api", taskRoutes);

// const driver = async () => {
//   await sequelize.sync();
// };

// driver();

app.listen(3001, () => console.log("hello from the server"));
