const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const threadRoutes = require("./routes/threadRoutes");

const app = express();

app.use(bodyParser.json());
app.use(threadRoutes);

const mongoUri =
  "mongodb+srv://admin:shimonit15@cluster0.irt91.mongodb.net/<forum>?retryWrites=true&w=majority";
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

app.get("/", (req, res) => {
  res.send(`hello world`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
