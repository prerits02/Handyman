const express = require('express');
const router = express.Router();
const bookingServiceController = require('../controllers/controllerbookingService');

// Get service details
router.get('/service/:serviceId', bookingServiceController.getServiceDetails);

// Get provider details
router.get('/provider/:providerId', bookingServiceController.getProviderDetails);

// Get service availability locations
router.get('/service/:serviceId/availability', bookingServiceController.getServiceAvailability);

// Submit a review
router.post('/service/:serviceId/review', bookingServiceController.submitReview);

module.exports = router;
