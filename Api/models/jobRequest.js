const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    estimatedPrice: { type: Number, required: true },
    services: { type: String, required: true }, // Services offered (e.g., "Ac Repair")
    image: { type: String }, // Store the image path or URL
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);
