const express = require('express');
const router = express.Router();

const viewerController = require('../controllers/ViewerController');

router.post('/register', viewerController.RegisterViewer);
router.get('/login', viewerController.LoginViewer);
router.get('/blogs', viewerController.getMultimedia);
router.get('/blogs/:blogId', viewerController.getOneMultimedia);

module.exports = router;
