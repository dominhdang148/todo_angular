const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const taskRoute = require("./routes/task-route");
const connectDB = require("./config/db");

const app = express();

connectDB();
app.use(bodyParser.json());
app.use(cors());
app.use("/api/task", taskRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Listening on port ${PORT}`);
  } else {
    console.log("Cannot start server", err);
  }
});
