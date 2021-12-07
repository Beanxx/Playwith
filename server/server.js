const express = require("express");
const mysql = require("mysql");
const index = require("./routes/index");
const dbconfig = require("./config/db.js");
const db = mysql.createConnection(dbconfig);

const app = express();

app.set("port", process.env.PORT || 3001);

app.get("/", (req, res) => {
  res.send("playwith backend");
});

app.get("/users", (req, res) => {
  db.query("SELECT * from users", (error, rows) => {
    if (error) throw error;
    console.log("User info is: ", rows);
    res.send(rows);
  });
});

db.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("Database connected.");
});

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});
