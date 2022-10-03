const express = require("express");
const app = express();
const port = 4242;
let path = require("path");

process.env.NODE_ENV= "development";

app.get("/name/:nom?", function (req, res) {
  let nom = req.params.nom ;
  let age = req.query.age ;
  if (nom == undefined ) {
    nom = "inconnu";
  } 
  if (age == undefined) {
    age ="i don't know your age"
  }
  else {
    age = "you have " +req.query.age+" yo"
  }
  res.type('html');
     res.write(`
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>hello ` +nom+`,` +age+`</h1>
</body>
</html>
     `) 
     res.end();
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});