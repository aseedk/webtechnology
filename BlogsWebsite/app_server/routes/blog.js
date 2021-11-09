const express = require('express');
const router = express.Router();
const controllerBlog = require('../controllers/mainController')
router.get('/', controllerBlog.blogs);
//router.get('/create', controllerBlog.home);
router.post('/', controllerBlog.create);
router.get('/:blogId', controllerBlog.blog);
router.put('/:blogId', controllerBlog.update);
router.delete('/:blogId', controllerBlog.delete)
module.exports = router;
