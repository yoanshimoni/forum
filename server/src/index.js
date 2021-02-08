require("./models/Thread");
require("./models/User");
require("./models/Message");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const threadRoutes = require("./routes/threadRoutes");
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(authRoutes);
app.use(threadRoutes);
app.use(messageRoutes);

const mongoUri =
  "mongodb+srv://admin:shimonit15@cluster0.irt91.mongodb.net/forum?ryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
// Connected correctly
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo");
});
// Error on connection
mongoose.connection.on("error", (err) => {
  console.log(err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
