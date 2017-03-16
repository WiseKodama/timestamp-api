var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

var port = process.env.PORT||8080;

app.get('/',function(req,res){
  var fileName = path.join(__dirname, 'index.html');
  res.sendFile(fileName, function(err){
    if(err) 
    res.status(err.status).end();
  });
});

app.use('/', function (req, res) {
  var lookUp = decodeURI(req.originalUrl.slice(-(req.originalUrl.length-1)));
  if(Number.isInteger(Date.parse(lookUp))){
    var myDate = new Date(Date.parse(lookUp));
    res.json({
      unix : (myDate/1000), 
      natural : myDate.toDateString()
    });
  } 
  else if(Number.isInteger(new Date(lookUp*1000).valueOf())){
    var myDate = new Date(lookUp*1000);
    res.json({
      unix : (myDate/1000), 
      natural : myDate.toDateString()
    });
  }
  else{
   res.json({
      unix : null, 
      natural : null
    });
  }
});

app.listen(port);