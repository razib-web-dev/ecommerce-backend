const express = require("express");
const chalk = require("chalk");
const app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(8000, () => {
  console.log(chalk.bgBlue("Port Running on 8000!"));
});
