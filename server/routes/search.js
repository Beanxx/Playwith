//localhost:3001/index/search

const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.json({  info: null    });
})

module.exports = router;