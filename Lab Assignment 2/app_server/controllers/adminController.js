
Room = require('../models/admin');

module.exports.addRoom = (req,res) => {
    const room = new Room(req.body);
    room.save(function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};

module.exports.viewRooms = (req,res) => {
    Room.find({},null, null ,function (error,result) {
        if (error) res.json(error);
        res.json(result);
    });
};

module.exports.viewRoom = (req,res) => {
    let id = req.params.roomId;
    console.log(id);
    Room.findById(id).exec(function (error, result) {
        if (error) res.json(error);
        console.log(result);
        res.json(result);
    });
};

module.exports.updateRoom = (req,res) => {
    let id = req.params.roomId;
    let data = req.body;
    Room.findByIdAndUpdate(id, data,null, function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};
