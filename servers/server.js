const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", (req, res) => res.json({ username: "chloe" }));

app.listen(3001, () => console.log("hello from the server"));
