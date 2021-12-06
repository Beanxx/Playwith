const express = require("express");
const search = require('./search.js');
const users = require('./users.js');

const router = express.Router();
router.use('/search', search);
router.use('/users', users);

module.exports = router;
