const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    dueDate: {
      type: Date,
      require: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      require: true,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model("Task", TaskSchema);
