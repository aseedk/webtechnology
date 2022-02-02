Room = require('../models/admin')
Guest = require('../models/guest')
Reservation = require('../models/reservation');

module.exports.registerGuest = (req,res) => {
    const guest = new Guest(req.body);
    console.log(guest);
    guest.save(function (error, result) {
        if (error) res.json(result);
        res.json(result);
    });
};

module.exports.reserveRoom = (req,res) => {
    const reservation = new Reservation(req.body);
    let roomId;
    Room.find({roomNumber: reservation.roomNumber}).exec(function (error, result) {
        if (error) res.json(error);
        console.log(result);
        roomId = result[0]._id;
    });
    console.log(roomId);
    reservation.roomDetails = roomId;
    reservation.save(function (error, result) {
        if (error) res.json(result);
        console.log(result);
        res.json(result);
    });
};

module.exports.viewReservation = (req,res) =>{
    let id = req.params.reservationId;
    console.log(id);
    Reservation.findById(id)
        .populate('guestDetails')
        .populate('roomDetails')
        .exec(function (error,result) {
        if (error) res.json(error);
        console.log(result);
        res.json(result);
    });
};

module.exports.deleteReservation = (req,res) =>{
    let id = req.params.reservationId;
    Reservation.findByIdAndDelete(id, null,function (err, doc, result) {
        if (err) res.json(err);
        res.json(result);
    })
};
