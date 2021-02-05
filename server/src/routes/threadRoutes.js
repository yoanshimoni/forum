const express = require("express");
const mongoose = require("mongoose");
const Thread = mongoose.model("Thread"); // import the db of Thread
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();
router.use(requireAuth);

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
  const { content } = req.body;

  try {
    const thread = new Thread({ content, publisher: req.user.name });
    await thread.save();
    res.send("A new thread posted");
  } catch (err) {
    console.log(err);
    return res.status(422).send({ error: "invalid thread post" });
  }
});

router.delete("/threads", async (req, res) => {
  const { threadId } = req.body.threadId;
  try {
    const threadDelete = await Thread.deleteOne({ _id: req.body.threadId });
    console.log(threadDelete);
    if (threadDelete.deletedCount) {
      res.send("This thread has been deleted");
    } else {
      res.status(422).send("This thread is not existed");
    }
  } catch (err) {
    console.log(err);
    return res.status(422).send({ error: "Couldn't delete the thread" });
  }
});

router.post("/comments", async (req, res) => {
  const { content, threadId } = req.body;

  try {
    await Thread.findOneAndUpdate(
      { _id: threadId },
      { $push: { comments: { content, publisher: req.user.name } } }
    );
    res.send("A new comment posted");
  } catch (err) {
    console.log(err);
    return res.status(422).send({ error: "invalid comment post" });
  }
});

router.delete("/comments", async (req, res) => {
  const { threadId, commentId } = req.body;
  try {
    const commentDelete = await Thread.findOneAndUpdate(
      { _id: threadId },
      { $pull: { comments: { _id: commentId } } },
      { new: true }
    );
    if (commentDelete) {
      res.send("This comment has been deleted");
    } else {
      res.status(422).send("This comment is not existed");
    }
    console.log(commentDelete);
  } catch (err) {
    console.log(err);
    return res.status(422).send({ error: "Couldn't delete the comment" });
  }
});

module.exports = router;
