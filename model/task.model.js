const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 200,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["todo", "inProgress", "done"],
    default: "todo",
  },
  userId: {
    type: String,
    required: true,
  },
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = { taskModel };
