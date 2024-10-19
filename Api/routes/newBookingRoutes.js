const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/controllernewBooking');

// Route to get all bookings
router.get('/bookings', bookingController.getAllBookings);

// Route to create a new booking
router.post('/bookings', bookingController.createBooking);



module.exports = router;
