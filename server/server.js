const express = require("express");
//const index = require("./routes/index");
const db = require("./config/db");
const bodyParser = require("body-parser");
const app = express();

const indexRouter = require("./routes/index");
const registerRouter = require("./routes/register");

app.use("/index", indexRouter);
app.use("/register", registerRouter);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/search", (req, res) => {
  db.query("SELECT * from room_list", (error, rows) => {
    if (error) throw error;
    //console.log("Room info is: ", rows);
    res.send(rows);
  });
});

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});

// app.post("/register", (req, res) => {
//   const id = req.body.user_id;
//   const pw = req.body.user_pw;
//   const email = req.body.user_email;
//   const phone = req.body.user_phone;
//   const name = req.body.user_name;

//   db.query(
//     "INSERT INTO users (user_id, user_pw, user_email, user_phone, user_name) VALUES (?,?,?,?,?)",
//     [id, pw, email, phone, name],
//     (err, result) => {
//       console.log(err);
//     }
//   );
// });

// app.post("/login", (req, res) => {
//   const id = req.body.user_id;
//   const pw = req.body.user_pw;

//   db.query(
//     "SELECT * FROM users WHERE user_id = ? AND user_pw = ?",
//     [id, pw],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       }
//       if (result.length > 0) {
//         res.send(result);
//       } else {
//         res.send({ message: "아이디/비밀번호를 잘못 입력하였습니다." });
//       }
//     }
//   );
// });
