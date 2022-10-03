const express = require("express");
const app = express();
const port = 4242;
var path = require("path");

process.env.NODE_ENV= "development";

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});