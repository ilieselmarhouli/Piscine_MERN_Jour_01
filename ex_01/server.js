const express = require("express");
const app = express();
const port = 4242;

process.env.NODE_ENV= "development";

app.get("/", function (req, res) {
  res.send("Great ! It works.");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});