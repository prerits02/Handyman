const mongoose = require('mongoose');

const bookingServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true }, // Duration in hours
  image: { type: String }, // Image URL
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true },
  availableLocations: [{ type: String }], // Array of locations
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  rating: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('BookingService', bookingServiceSchema);
