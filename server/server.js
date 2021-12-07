const express = require("express");
const app = express();
const mysql = require("mysql");
const index = require("./routes/index.js");
const dbconfig = require("./config/db.js");
const db = mysql.createConnection(dbconfig);
const cors = require("cors");

app.use("/index", index);
app.use(express.json());
app.use(cors());

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

app.get("/test", (req, res) => {
  db.query("SELECT * from test", (error, rows) => {
    if (error) throw error;
    console.log("User info is: ", rows);
    res.send(rows);
  });
});

app.post("/register", (req, res) => {
  const id = req.body.user_id;
  const pw = req.body.user_pw;
  const email = req.body.user_email;
  const phone = req.body.user_phone;
  const name = req.body.user_name;

  db.query(
    "INSERT INTO users (user_id, user_pw, user_email, user_phone, user_name) VALUES (?,?,?,?,?)",
    [id, pw, email, phone, name],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  const id = req.body.user_id;
  const pw = req.body.user_pw;

  db.query(
    "SELECT * FROM users WHERE user_id = ? AND user_pw = ?",
    [id, pw],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "아이디/비밀번호를 잘못 입력하였습니다." });
      }
    }
  );
});
