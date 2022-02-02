Publisher = require('../models/publisher')
Blog = require('../models/blog')

module.exports.ViewPublishers = function (req, res) {
    Publisher.find(function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};

module.exports.ViewPublisherBlogs = function (req,res) {
    let publisherId = req.params.publisherId;
    Blog.find({Publisher: publisherId}, null, null, function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};
module.exports.ViewPublisherBlog = function (req,res) {
    let blogId = req.params.blogId;
    Blog.findById(blogId, null, null, function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};

module.exports.UpdatePublisherBlog = function (req,res) {
    let blogId = req.params.blogId;
    let data = req.body;
    Blog.findByIdAndUpdate(blogId, {$set: data}, null, function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};
module.exports.DeletePublisher = function (req,res) {
    let publisherId = req.params.publisherId;
    Publisher.findByIdAndDelete(publisherId, null, function (err, doc, result) {
        if (err) res.json(err);
        res.json(result);
    });
};
