const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    userType:{
        type: String,
        required: true
    },
    multimediaList:{
        ref: 'Multimedia',
        type: [mongoose.Types.ObjectId]
    }
});

const User = new mongoose.model('User', userSchema);
module.exports = User;
