const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ tasks: { text: "coding", id: "0" } }]);
});

router.post("/", (req, res) => {
  console.log(req.body);
  const text = req.body.tasks.text;
  const id = req.body.tasks.id;
  res.json({ tasks: { text: text, id: id } });
});

module.exports = router;
