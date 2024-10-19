const BookingService = require('../models/bookingServices');
const Provider = require('../models/provide');
const Review = require('../models/review');

// Fetch service details
exports.getServiceDetails = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const service = await BookingService.findById(serviceId).populate('provider reviews');
    
    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }

    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get provider details
exports.getProviderDetails = async (req, res) => {
  try {
    const { providerId } = req.params;
    const provider = await Provider.findById(providerId);
    
    if (!provider) {
      return res.status(404).json({ error: 'Provider not found' });
    }

    res.status(200).json(provider);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Fetch available service locations
exports.getServiceAvailability = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const service = await BookingService.findById(serviceId);

    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }

    const availableLocations = service.availableLocations;
    res.status(200).json({ availableLocations });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Submit a review
exports.submitReview = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const { userId, rating, comment } = req.body;

    const service = await BookingService.findById(serviceId);

    if (!service) {
      return res.status(404).json({ error: 'Service not found' });
    }

    const review = new Review({
      user: userId,
      rating,
      comment,
      service: serviceId,
    });

    await review.save();

    // Update service with new review
    service.reviews.push(review);
    await service.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
