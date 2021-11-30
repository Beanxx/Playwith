var express = require('express');
var router = express.Router();
var RoomList = require('../models/RoomList');

router.get('/', function(req, res){
    RoomList.find({})
    .exec(function(err, lists){
        if(err) return res.json(err);
        res.render('testView', {lists:lists});
    });
});

module.exports = router;