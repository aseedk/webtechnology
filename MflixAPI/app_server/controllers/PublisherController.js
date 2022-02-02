const Console = require("console");
User = require('../models/User');
Multimedia = require('../models/Multimedia');

module.exports.RegisterPublisher = function (req,res) {
    console.log("Hello");
    let data = req.body;
    let user = new User(data);
    console.log(data);
    user.save(function (error, result) {
        console.log(result);
        if (error) res.json(error);
        res.json(result);
    });
};

module.exports.LoginPublisher = function (req,res) {
    let data = req.body;
    User.findOne({'email': data['email'], 'password': data['password']}, null, null, function (error, result) {
        if (error) res.json(error);
        console.log(result);
        res.json(result);
    });
};

module.exports.PublishMultimedia = function (req,res) {
    let data = req.body;
    let multimedia = new Multimedia(data);
    multimedia.save(function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};

module.exports.getMultimedia = function (req, res) {
    let publisherId = req.params.publisherId;
    Multimedia.find({'Publisher': publisherId}, function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};

module.exports.getOneMultimedia = function (req, res) {
    let blogId = req.params.blogId;
    Multimedia.findById(blogId, function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};

module.exports.updateOneMultimedia = function (req, res) {
    let blogId = req.params.blogId;
    let data = req.body;
    Multimedia.findByIdAndUpdate(blogId,{$set: data} ,null,function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};

module.exports.deleteOneMultimedia = function (req, res) {
    let blogId = req.params.blogId;
    Multimedia.findByIdAndDelete(blogId,null ,function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};
