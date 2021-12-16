const express = require("express");
const app = express();
const db = require("./config/db");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.set("port", process.env.PORT || 3001);

app.get("/", (req, res) => {
  res.send("playwith backend");
});

app.get("/api/search", (req, res) => {
  db.query("SELECT * from room_list", (error, rows) => {
    if (error) throw error;
    console.log("Room info is: ", rows);
    res.send(rows);
  });
});

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});

app.get("/api/register", (req, res) => {
  db.query("SELECT * from users", (error, rows) => {
    if (error) throw error;
    console.log("User info is: ", rows);
    res.send(rows);
  });
});

app.post("/api/register", (req, res) => {
  const id = req.body.user_id;
  const pw = req.body.user_pw;
  const email = req.body.user_email;
  const phone = req.body.user_phone;
  const name = req.body.user_name;

  db.query(
    "INSERT INTO users (user_id, user_pw, user_email, user_phone, user_name) VALUES (?,?,?,?,?)",
    [id, pw, email, phone, name],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
    }
  );
});

app.post("/api/create", (req, res) => {
  const id = req.body.room_id;
  const title = req.body.room_title;
  const subject = req.body.room_subject;
  const isPrivate = req.body.room_private;
  const pw = req.body.room_pw;
  const count = req.body.room_count;
  const theme = req.body.room_theme;

  db.query(
    "INSERT INTO room_list (room_id, room_title, room_subject, room_private, room_pw, room_count, room_theme) VALUES (?,?,?,?,?,?,?)",
    [id, title, subject, isPrivate, pw, count, theme],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/api/login", (req, res) => {
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
        res.send({ message: "Success" });
      } else {
        res.send({ message: "Fail" });
      }
    }
  );
});
