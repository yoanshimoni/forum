const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User"); // import the db of User

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = new User({ name, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid name or password" });
  }
});

router.post("/signin", async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    return res.status(422).send({ error: "Must provide name and password" });
  }

  const user = await User.findOne({ name: name });
  console.log(user);
  if (!user) {
    return res.status(422).send({ error: "Invalid password or name1" });
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid password or name2" });
  }
});

module.exports = router;
