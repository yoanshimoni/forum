const express = require("express");
const mongoose = require("mongoose");
const Message = mongoose.model("Message"); // import the db of Message
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();
router.use(requireAuth);

router.post("/messages", async (req, res) => {
  const { content, recipientId } = req.body;

  try {
    const message = new Message({
      content,
      senderId: req.user._id,
      recipientId,
    });
    await message.save();
    res.send(message);
  } catch (err) {
    console.log(err);
    return res.status(422).send({ error: "Invalid message post" });
  }
});

module.exports = router;
