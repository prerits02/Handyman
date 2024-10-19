// routes/bookingRoutes.js

const express = require('express');
const bookingController = require('../controllers/controllerdetails');

const router = express.Router();

// Create a new booking
router.post('/details', bookingController.createBooking);

// Get booking details by ID
router.get('/details/:id', bookingController.getBookingById);

// Get booking history by booking ID
router.get('/details/:id/history', bookingController.getBookingHistory);

// Update booking status
router.put('/details/:id/status', bookingController.updateBookingStatus);

// Get price details for a booking
router.get('/details/:id/price', bookingController.getPriceDetails);

module.exports = router;
