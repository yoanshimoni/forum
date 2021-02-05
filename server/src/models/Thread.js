const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  publisher: {
    type: String,
    default: "Anonymous",
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

const threadSchema = new mongoose.Schema({
  publisher: {
    type: String,
    default: "Anonymous",
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
    default: [],
  },
});

mongoose.model("Thread", threadSchema); // Creates the threadb
