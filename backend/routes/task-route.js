const express = require("express");
const Task = require("../models/task");

const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const newTask = Task(req.body);
    const savedTask = newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
