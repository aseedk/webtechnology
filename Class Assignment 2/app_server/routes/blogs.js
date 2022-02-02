const express = require('express');
const router = express.Router();
const controllerBlog = require('../controllers/mainController')
router.get('/', controllerBlog.displayBlogsView);
router.get('/create', controllerBlog.createBlogView);
router.post('/create', controllerBlog.createBlogPost);
router.get('/:blogId', controllerBlog.displayBlogView);
router.get('/:blogId/update', controllerBlog.displayUpdateView);
router.post('/:blogId/update', controllerBlog.updateBlog);
router.get('/:blogId/delete', controllerBlog.deleteBlog)
module.exports = router;
