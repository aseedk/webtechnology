mongoose = require('mongoose');
url = 'mongodb://localhost:27017/Blog_DB';
blogSchema = new mongoose.Schema({
    BlogID: {
        _id:true,
        type: Number,
        unique: true,
        required: true
    },
    Title:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    Body:{
        type:String,
        required:true
    },
    Rating: Number,
    Comments: String
}, {timestamps:true})
Blog = mongoose.model('Blogs', blogSchema);

blogData = new Blog({
    BlogID: 3,
    Title: "Aseed Blog",
    Author: "Aseed",
    Body:"Best Blog Ever",
    Rating: 5,
    comments: "Best Blog Ever"
});
//Insert One
mongoose.connect(url, function (err) {
    if (err) throw err;
    blogData.save(function (err) {
        if (err) throw err;
        console.log("Blog Saved")
    })
})

//Model.deleteMany()
mongoose.connect(url, function (err) {
    if (err) throw err;
    Blog.deleteMany({Author:"Aseed"}, function (err) {
        if (err) throw err;
        console.log("Author: Aseed Records Deleted")
    })
})

//Model.deleteOne()
mongoose.connect(url, function (err) {
    if (err) throw err;
    Blog.deleteOne({Title: "Aseed Blog"}, function (err) {
        if (err) throw err;
        console.log("One Record Deleted of Title: Aseed Blog")
    })
})
//Model.find()
mongoose.connect(url, function (err) {
    if (err) throw err;
    Blog.find({Author: 'Aseed'},{_id:0, Title:1}, null, function (error, result) {
        if (err) throw err;
        console.log(result);
    })
})
//Model.findbyID()
mongoose.connect(url, function (err) {
    if (err) throw err;
    Blog.findById("617bd75c98eec1c9344be57d", {Title:1, Body:1},null,function (error, result) {
        if (error) throw error;
        console.log(result);
    })
})
