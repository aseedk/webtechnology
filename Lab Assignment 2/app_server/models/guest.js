mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Lab_Assignment_2', function (err) {
    if (err) throw err;
})

guestSchema = new mongoose.Schema({
    Name: String,
    Telephone: String,
    Address: String,
    Country: String,
    NationalID: String
});

Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
