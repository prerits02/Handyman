const mongoose = require('mongoose');

const providerTypeSchema = new mongoose.Schema({
    typeName: { type: String, required: true, unique: true },
    description: { type: String }
});

module.exports = mongoose.model('ProviderType', providerTypeSchema);

