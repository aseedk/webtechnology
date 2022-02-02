const express = require('express');
const router = express.Router();

const publisherController = require('../controllers/PublisherController')
router.post('/register', publisherController.RegisterPublisher);
router.post('/login', publisherController.LoginPublisher);
router.post('/multimedias', publisherController.PublishMultimedia);
router.get('/multimedias/:publisherId', publisherController.getMultimedia);
router.get('/multimedia/:multimediaId', publisherController.getOneMultimedia);
router.put('/UpdateMultimedia', publisherController.updateOneMultimedia);
router.delete('/DeleteMultimedia', publisherController.deleteOneMultimedia);

module.exports = router;
