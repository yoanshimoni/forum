const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  publisher: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: "",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const ThreadSchema = new mongoose.Schema({
  publisher: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: "",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  comments: {
    type: [commentSchema],
  },
});

mongoose.model("Thread", trackSchema);
