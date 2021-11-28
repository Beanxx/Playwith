// const express = require("express");
// const app = express();
// const port = 3001;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

const express = require('express');
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

app.set('view engine', 'ejs');
app.use(express.static(__dirname+'../public'));

var port = 3000;
app.listen(port, function(){
  console.log('test server listening at http://localhost:'+port);
});

// Routes
app.get('/', function(req, res) {
  res.redirect('../public/test.html');
});