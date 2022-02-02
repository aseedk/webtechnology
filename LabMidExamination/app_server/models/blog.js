const mongoose = require('mongoose');

blogSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Snippet:{
        type: String,
        required: true
    },
    Body:{
        type: String,
        required: true
    },
    Comments:[String],
    Ratings: Number,
    Verified: String,
    Publisher:{
        ref: 'Publisher',
        type: mongoose.Types.ObjectId
    }
});

Blog = mongoose.model('Blogs', blogSchema);
module.exports = Blog;
