
const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/controllerService');

router.get('/list', serviceController.getServices);
router.post('/add', serviceController.addService);

module.exports = router;
