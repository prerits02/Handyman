const Booking = require('../models/newBooking');

// Get all bookings
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
};

// Create a new booking
exports.createBooking = async (req, res) => {
    const { name, img, status, bid, price, discount, date, Provider } = req.body;
    const newBooking = new Booking({ name, img, status, bid, price, discount, date, Provider });

    try {
        const savedBooking = await newBooking.save();
        res.status(201).json(savedBooking);
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error });
    }
};

