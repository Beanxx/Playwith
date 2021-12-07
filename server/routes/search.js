//localhost:3001/index/search

const express = require("express");
const mysql = require("mysql");
const dbconfig = require("../config/db.js");
const db = mysql.createConnection(dbconfig);
const ejs = require('ejs');
const fs = require('fs');
const mainPage = fs.readFileSync('../ejs/index.ejs', 'utf8');

const app = express();

db.connect((err) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("room_list connected.");
  });

app.get('/', (req, res) => {

    db.query("SELECT * FROM room_list;", function(err, result, fields){
        if(err) throw err;
        else {
            var page = ejs.render(mainPage, {
                title: "Room List",
                data: result,
            });
            res.send(page);
        }

    });

});

module.exports = app;