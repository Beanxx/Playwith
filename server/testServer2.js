var express = require('express');
const path = require('path')
var app = express();

app.listen(3000, function() {
    console.log('Connected, 3000 port!')
});

app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'html');

app.get('/', function(req, res) {
    res.render('index');
})