const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Blog = require('../models/blog')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/blogs', function (req, res) {
  Blog.find({Verified: "true"}, function (err, result) {
    res.json(result);
  })
})
module.exports = router;
