path = require("path");
fs = require("fs");
Publisher = require('../models/publisher')
Blog = require('../models/blog')

BufferToImage = function (image) {
    const promise = fs.promises.readFile(image);
    Promise.resolve(promise).then(function(buffer){
        return buffer;
    });
}

module.exports.PublisherRegister = function (req,res) {
    let data = req.body;
    let publisher = new Publisher(data);
    publisher.save(function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};

module.exports.PublisherBlogs = function (req,res) {
    let publisherId = req.params.publisherId;
    Blog.find({Publisher: publisherId}, null, null, function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};
module.exports.PublisherBlog = function (req,res) {
    let blogId = req.params.blogId;
    Blog.findById(blogId, null, null, function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};
module.exports.PublisherAddBlog = function (req,res) {
    let data = req.body;
    let blog = new Blog(data);
    blog.save(function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};
module.exports.PublisherUpdatedBlog = function (req,res) {
    let blogId = req.params.blogId;
    let data = req.body;
    Blog.findByIdAndUpdate(blogId, {$set: data}, null, function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};
module.exports.PublisherDeleteBlog = function (req,res) {
    let blogId = req.params.blogId;
    Blog.findByIdAndDelete(blogId, null, function (err, doc, result) {
        if (err) res.json(err);
        res.json(result);
    });
};
