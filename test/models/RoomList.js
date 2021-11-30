var mongoose = require('mongoose');

// Schema
var roomListSchema = mongoose.Schema({
    room_title:{type:String, required:true},
    room_subject:{type:Number},
    room_theme:{type:Number},
    room_private:{type:Number},
    room_pw:{type:Number},
    room_count:{type:Number},
});

// Model & Export
var RoomList = mongoose.model('roomList', roomListSchema);
module.exports = RoomList;