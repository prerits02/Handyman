const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/controllerPayment');

router.post('/process', paymentController.processPayment);

module.exports = router;
