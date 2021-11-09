const Blog = require('../models/blog.js')

const sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};
/* GET home page. */
module.exports.index = function (req, res, next) {
    res.render('index', {title: 'Express'});
};
module.exports.home = function (req,res,next) {
    res.render('create')
}

module.exports.blogs = function (req,res){
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
            sendJsonResponse(res, 200, result);
            console.log('The result is', result);

        })
};
module.exports.create = function (req,res) {
    const blog = new Blog(req.body);
    blog.save(function (err) {
        if (err){
            sendJsonResponse(res,400,err);
        }else{
            sendJsonResponse(res,201,blog);
        }
    })
    /*mongoose.connect('mongodb://localhost:27017/Blog_DB', function (err) {
        if (err) throw err;
        const blog = new Blog(req.body);
        blog.save(function (error) {
            if (error) throw error;
            res.redirect('/blogs/create');
            mongoose.connection.close();
        })
    })*/
}

module.exports.blog = function (req, res) {
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
            console.log('the result is', result);
            sendJsonResponse(res,200, result)
        });
}
module.exports.update = function (req, res) {
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
        sendJsonResponse(res,200,uBlog);
    })
}
module.exports.delete = function (req,res) {
    const id = req.params.blogId;
    console.log('the id is', id);

    Blog.findByIdAndDelete(id,function (err) {
        if (err){
            sendJsonResponse(res, 404, err);
            return;
        }
        sendJsonResponse(res,204,null);
    })
}
