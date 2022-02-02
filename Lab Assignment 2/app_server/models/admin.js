mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Lab_Assignment_2', function (err) {
  if (err) throw err;
})

roomSchema = new mongoose.Schema({
  roomNumber: Number,
  roomType: String,
  roomPrice: Number,
  roomFacilities: [String],
  roomReservation:Boolean
})

Room = mongoose.model('Room', roomSchema);

module.exports = Room;
