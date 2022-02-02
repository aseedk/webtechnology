const express = require('express');
const router = express.Router();
const publisherController = require('../controllers/publisher')

router.post('/register', publisherController.PublisherRegister);
router.post('/blogs/blog', publisherController.PublisherAddBlog);
router.get('/blogs/:publisherId', publisherController.PublisherBlogs);
router.get('/:blogId', publisherController.PublisherBlog);
router.put('/blogs/:blogId', publisherController.PublisherUpdatedBlog);
router.delete('/:publisherId/blogs/:blogId', publisherController.PublisherDeleteBlog);

module.exports = router;
