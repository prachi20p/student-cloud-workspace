const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  text: String,
  done: { type: Boolean, default: false }
});

module.exports = mongoose.model("Task", taskSchema);
