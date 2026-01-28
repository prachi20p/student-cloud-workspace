const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

router.post("/", async (req, res) => {
  if (!req.body.text || req.body.text.trim() === "") {
    return res.status(400).json({ message: "Task text is required" });
  }

  const task = await Task.create({ text: req.body.text });
  res.json(task);
});


router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

module.exports = router;
