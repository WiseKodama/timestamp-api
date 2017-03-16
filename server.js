var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send("farts");
});

app.listen(8080);