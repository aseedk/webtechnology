User = require('../models/User');
Multimedia = require('../models/Multimedia');

module.exports.RegisterViewer = function (req,res) {
    let data = req.body;
    let user = new User(data);
    user.save(function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};

module.exports.LoginViewer = function (req,res) {
    let data = req.body;
    User.findOne({'email': data['email'], 'password': data['password']}, null, null, function (error, result) {
        if (error) res.json(error);
        res.json(result);
    });
};

module.exports.getMultimedia = function (req, res) {
    Multimedia.find({}, function (error, result) {
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
