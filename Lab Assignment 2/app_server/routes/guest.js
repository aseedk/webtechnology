express = require('express');
router = express.Router();

GuestController = require('../controllers/guestController')

router.post('/', GuestController.registerGuest);

router.post('/room/reserve', GuestController.reserveRoom);

router.get('/room/:reservationId', GuestController.viewReservation);

router.delete('/room/:reservationId', GuestController.deleteReservation);

module.exports = router;
