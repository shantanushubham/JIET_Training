const mongoose = require("mongoose");

const Task = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },

  dateCreated: {
    type: Date,
    default: new Date(),
  },

  taskDescription: {
    type: String,
    required: true,
  },

  taskDateTime: {
    type: Date,
    required: true,
  },

  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("task", Task, "task");
