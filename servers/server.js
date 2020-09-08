const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const route = require("./routes/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", route);

app.listen(3001, () => console.log("hello from the server"));
