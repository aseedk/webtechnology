const Blog = require('../models/blog.js')

const sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};
/* GET home page. */
module.exports.index = function (req, res) {
    res.render('index', {title: 'Express'});
};
module.exports.createBlogView = function (req, res) {
    res.render('blog_create')
}

module.exports.displayBlogsView = function (req, res){
    Blog.find({})
        .exec(function (error, result) {
            if (!result){
                sendJsonResponse(result, 404, {
                    "message": "Blogs Not Found"
                });
                return;
            }else if (error){
                sendJsonResponse(res, 404, error);
                return;
            }
            res.render('blogs_view', {blogs: result})
            //console.log('The result is', result);

        })
};
module.exports.createBlogPost = function (req, res){
    console.log(req.body);
    const blog = new Blog(req.body);
    blog.save(function (error) {
        if (error) throw error;
        res.redirect('/blogs/create')
    })
}

module.exports.displayBlogView = function (req, res) {
    const id = req.params.blogId;
    console.log('The id is', id);
    Blog.findById(id)
        .exec(function (error, result) {
            if (!result){
                sendJsonResponse(res,404,{
                    "message": 'blogsId not found'
                })
                return;
            }else if (error){
                sendJsonResponse(res,404, error);
                return;
            }
            //console.log('the result is', result);
            res.render('blog_view', {blog: result})
        });
}

module.exports.displayUpdateView = function (req,res) {
    const id = req.params.blogId;
    Blog.findById(id)
        .exec(function (error, result) {
            if (!result){
                sendJsonResponse(res,404,{
                    "message": 'blogsId not found'
                })
                return;
            }else if (error){
                sendJsonResponse(res,404, error);
                return;
            }
            //console.log('the result is', result);
            res.render('blog_update', {blog: result})
        });
}
module.exports.updateBlog = function (req, res) {
    const id = req.params.blogId;
    const blog = req.body;
    if (!req.body.body){
        sendJsonResponse(res,400,{
            "message": "Update must have a body inside it"
        });
        return;
    }
    Blog.findByIdAndUpdate(id,{$set:blog}, {new: true}, function (err, uBlog) {
        if (!uBlog){
            sendJsonResponse(res,404,{
                "message": "BlogId Not Found"
            });
            return;
        }else if (err){
            sendJsonResponse(res,400,err);
            return;
        }
        res.redirect('/blogs');
    })
}
module.exports.deleteBlog = function (req,res) {
    const id = req.params.blogId;
    Blog.findByIdAndDelete(id,function (err) {
        if (err){
            sendJsonResponse(res, 404, err);
        }
        else {
            console.log("Data Deleted");
            res.redirect('/blogs');
        }
    })
}
