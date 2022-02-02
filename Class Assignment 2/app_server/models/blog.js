mongoose = require('mongoose');
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/Blog_DB', function (err) {
    if (err) throw err;
});

blogSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true
    },
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
