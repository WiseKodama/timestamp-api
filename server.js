var express = require('express');
var app = express();

app.use('/', function (req, res) {
  var lookUp = decodeURI(req.originalUrl.slice(-(req.originalUrl.length-1)));
  if(Number.isInteger(Date.parse(lookUp))){
    var myDate = new Date(Date.parse(lookUp));
    res.send({
      "unix" : (myDate/1000), 
      "natural" : myDate.toDateString()
    });
  } 
  else if(Number.isInteger(new Date(lookUp*1000).valueOf())){
    var myDate = new Date(lookUp*1000);
    res.send({
      "unix" : (myDate/1000), 
      "natural" : myDate.toDateString()
    });
  }
  else{
   res.send({
      "unix" : null, 
      "natural" : null
    });
  }
});

app.listen(8080);