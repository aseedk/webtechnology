const express = require('express');
const router = express.Router();
const controllerIndex = require('../controllers/mainController')
/* GET home page. */
router.get('/', controllerIndex.index);

module.exports = router;
