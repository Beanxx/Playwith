const express = require('express');
const path = require('path')
var mongoose = require('mongoose');
const app = express();

// DB 연결
mongoose.connect("mongodb+srv://playwith:playwith1004@playwith.42mh4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
var db = mongoose.connection;

db.once('open', function(){
  console.log('DB connected');
});

db.on('error', function(err){
  console.log('DB ERROR : ', err);
});

// Port
var port = 3000;
app.listen(port, function(){
  console.log('test server listening at http://localhost:'+port);
});

