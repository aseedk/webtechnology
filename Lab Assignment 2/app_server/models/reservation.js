mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Lab_Assignment_2', function (err) {
    if (err) throw err;
})

reservationSchema = new mongoose.Schema({
    roomNumber: Number,
    check_in: String,
    check_out: String,
    guestDetails:{
        ref: 'Guest',
        type: mongoose.Schema.Types.ObjectId
    },
    roomDetails:{
        ref: 'Room',
        type: mongoose.Schema.Types.ObjectId
    }
});

Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
