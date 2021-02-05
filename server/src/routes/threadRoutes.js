const express = require("express");
const mongoose = require("mongoose");
const Thread = mongoose.model("Thread"); // import the db of Thread
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();
// router.use(requireAuth);

router.get("/threads", async (req, res) => {
  try {
    const threads = await Thread.find({});
    console.log(threads);
    res.send(threads);
  } catch (err) {
    console.log(err);
    return res.status(422).send({ error: "couldn't return threads" });
  }
});

router.post("/threads", async (req, res) => {
  const { publisher, content, comments } = req.body;

  try {
    const thread = new Thread({ publisher, content, comments });
    await thread.save();

    res.send("A new thread posted");
  } catch (err) {
    console.log(err);
    return res.status(422).send({ error: "invalid thread post" });
  }
});

router.post("/comments", async (req, res) => {
  const { threadId, publisher, content } = req.body;

  try {
    const thread = await Thread.findOne({ publisher: "test1" });
    console.log(thread);
    await Thread.findOneAndUpdate(
      { _id: thread._id },
      { $push: { comments: { publisher, content } } }
    );
    res.send("A new comment posted");
  } catch (err) {
    console.log(err);
    return res.status(422).send({ error: "invalid comment post" });
  }
});

module.exports = router;
