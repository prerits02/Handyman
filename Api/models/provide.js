const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  location: { type: String },
  verified: { type: Boolean, default: false },
  rating: { type: Number, default: 0 },
  joinedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Provide', providerSchema);
