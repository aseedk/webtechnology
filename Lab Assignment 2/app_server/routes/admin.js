express = require('express');
router = express.Router();

AdminController = require('../controllers/adminController')

router.post('/room', AdminController.addRoom);

router.get('/rooms', AdminController.viewRooms);

router.get('/rooms/:roomId', AdminController.viewRoom);

router.put('/rooms/:roomId', AdminController.updateRoom);

module.exports = router;
