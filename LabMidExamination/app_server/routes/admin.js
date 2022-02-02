const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin')

router.get('/publishers', adminController.ViewPublishers);
router.get('/blogs/:publisherId', adminController.ViewPublisherBlogs);
router.get('/blogs/:blogId', adminController.ViewPublisherBlog);
router.put('/blogs/:blogId', adminController.UpdatePublisherBlog);
router.delete('/publishers/:publisherId', adminController.DeletePublisher);

module.exports = router;
