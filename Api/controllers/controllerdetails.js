// controllers/bookingController.js

const Booking = require('../models/details');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
};

// Get booking details by ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching booking details', error });
  }
};

// Get booking history
exports.getBookingHistory = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).select('statusHistory');
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking.statusHistory);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching booking history', error });
  }
};

// Update booking status
exports.updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    booking.statusHistory.push({
      status: req.body.status,
      details: req.body.details,
    });
    await booking.save();
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error updating booking status', error });
  }
};

// Get price details for booking
exports.getPriceDetails = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).select('priceDetails');
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking.priceDetails);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching price details', error });
  }
};
