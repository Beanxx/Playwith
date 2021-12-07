//localhost:3001/index/users

const express = require("express");
const mysql = require("mysql");
const dbconfig = require("../config/db.js");
const db = mysql.createConnection(dbconfig);

const app = express();

app.get('/', (req, res) => {
    db.query("SELECT * from users", (error, rows) => {
      if (error) throw error;
      console.log("User info is: ", rows);
      res.send(rows);
    });
  });

module.exports = app;