const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: mongoose.Schema.Types.ObjectId, ref: 'ProviderType', required: true },
    status: { type: String, enum: ['pending', 'active'], default: 'pending' },
    addedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Provider', providerSchema);
