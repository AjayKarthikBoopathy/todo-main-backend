const express = require("express");
const app = express();
const cors = require("cors");
require("./conn/conn");
const path = require("path");
const auth = require("./routes/auth");
const list = require("./routes/list");

// to use require - change type commonjs in package.json

app.use(express.json());
app.use(cors());

app.use("/api/user", auth);
app.use("/api/task", list);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(1000, () => {
  console.log("Server Started");
});
