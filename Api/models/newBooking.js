const mongoose = require('mongoose');

const newBookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true }, // URL to the image
    status: { type: String, required: true }, // Completed, Pending, etc.
    bid: { type: String, required: true }, // Booking ID or reference number
    price: { type: Number, required: true },
    discount: { type: String, default: "none" }, // e.g., "10% Off"
    date: { type: String, required: true }, // Date and time in string format
    Provider: { type: String, required: true } // Service provider's name
}, { timestamps: true });

const Booking = mongoose.model('newBooking', newBookingSchema);

module.exports = Booking;
