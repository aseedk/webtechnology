mongoose = require('mongoose');
Schema = mongoose.Schema;

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

const Blog = mongoose.model('Blog', blogSchema)

express = require('express');
router = express.Router();

router.get('/create', function (err, res) {
    res.render('create')
});

mongoose.connect('mongodb://localhost:27017/Blog_DB', function (err) {
    if (err) throw err;
    router.post('/create', (req,res) =>{
        console.log("Testing", req.body);
        const blog = new Blog(req.body);
        blog.save(function (error) {
            if (error) throw error;
            res.redirect('/blogs/create')
        })
    })
})
module.exports = router;
