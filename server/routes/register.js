const express = require("express");
const router = express.Router();
const db = require("../config/db");

const bcrypt = require("bcrypt");
const saltRounds = 10;

/* GET users listing. */

router.get("/", (req, res) => {
  db.query("SELECT * from users", (error, rows) => {
    if (error) throw error;
    console.log("User info is: ", rows);
    res.send(rows);
  });
});

router.post("/", (req, res, next) => {
  const param = [
    req.body.user_id,
    req.body.user_pw,
    req.body.user_email,
    req.body.user_phone,
    req.body.user_name,
  ];

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
