require("dotenv").config();

module.exports = {
  host: process.env.DB_HOST,
  port: "3306",
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
};
