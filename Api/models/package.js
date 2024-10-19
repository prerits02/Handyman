const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    packageName: { type: String, required: true },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'Provider', required: true }, // Reference to Provider
    service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },  // Reference to Service
    description: { type: String, required: true },
    price: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
    image: { type: String }, // Stores image URL
    isFeatured: { type: Boolean, default: false }, // Feature flag
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Package', packageSchema);
