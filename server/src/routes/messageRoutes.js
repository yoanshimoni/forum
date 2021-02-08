const express = require("express");
const mongoose = require("mongoose");
const Message = mongoose.model("Message"); // import the db of Message
const requireAuth = require("../middlewares/requireAuth");

const PAGE_SIZE = 5;

const router = express.Router();
router.use(requireAuth);

router.get("/messages", async (req, res) => {
  const page = req.query.pageNum || 1;
  try {
    const messages = await Message.find({ recipientId: req.user._id })
      .skip((page - 1) * PAGE_SIZE)
      .limit(PAGE_SIZE);
    res.send(messages);
  } catch (err) {
    console.log(err);
    return res.status(422).send({ error: "Couldn't return messages" });
  }
});

router.post("/messages", async (req, res) => {
  const { content, recipientId } = req.body;

  try {
    const message = new Message({
      content,
      senderId: req.user._id,
      senderName: req.user.name,
      recipientId,
    });
    await message.save();
    res.send(message);
  } catch (err) {
    console.log(err);
    return res.status(422).send({ error: "invalid message post" });
  }
});

module.exports = router;
