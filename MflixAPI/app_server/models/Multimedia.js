const mongoose = require('mongoose');
const multimediaSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Genre:{
        type: String,
        required: true
    },
    Cast:{
        type: [String],
        required: true
    },
    Plot:{
        type: String,
        required: true
    },
    Type:{
        type: String,
        required: true
    },
    Publisher:{
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const Multimedia = new mongoose.model('Multimedia', multimediaSchema);
module.exports = Multimedia;
