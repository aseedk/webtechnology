const mongoose = require('mongoose');

publisherSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    AreaOfPublishing:{
        type: String,
        required: true
    },
    ProfilePicture:{
        type: Buffer
    }
});

Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = Publisher;
