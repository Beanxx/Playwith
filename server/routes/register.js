const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// users table data 값들 보여줌.
router.get("/", (req, res) => {
  db.query("SELECT * from users", (error, rows) => {
    if (error) throw error;
    console.log("User info is: ", rows);
    res.send(rows);
  });
});

// 회원가입 데이터를 users table에 넣어줌.
router.post("/", (req, res, next) => {
  const param = [
    req.body.user_id,
    req.body.user_pw,
    req.body.user_email,
    req.body.user_phone,
    req.body.user_name,
  ];

  // 비밀번호 암호화하여 db에 저장
  bcrypt.hash(param[1], saltRounds, (error, hash) => {
    param[1] = hash;
    db.query(
      "INSERT INTO users (`user_id`, `user_pw`, `user_email`, `user_phone`, `user_name`) VALUES (?,?,?,?,?)",
      param,
      (err, row) => {
        if (err) console.log(err);
      }
    );
  });
  console.log(req.body);
  res.end();
});

module.exports = router;
