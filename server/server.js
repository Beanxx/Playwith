const express = require("express");
const app = express();
const db = require("./config/db");
const indexRouter = require("./routes/index");
const registerRouter = require("./routes/register");
const bodyParser = require("body-parser");

// 포트 번호 3001로 설정
app.set("port", process.env.PORT || 3001);

app.use("/index", indexRouter);
app.use("/register", registerRouter);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("playwith backend");
});

app.get("/search", (req, res) => {
  db.query("SELECT * from room_list", (error, rows) => {
    if (error) throw error;
    console.log("Room info is: ", rows);
    res.send(rows);
  });
});

app.listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});

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
