const express = require("express");
const mongoose = require("mongoose");

const Thread = mongoose.model("Thread");

const router = express.Router();

module.exports = router;
