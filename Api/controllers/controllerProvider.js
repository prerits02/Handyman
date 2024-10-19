
const Provider = require('../models/Provider');

// Create a new provider
exports.createProvider = async (req, res) => {
    try {
        const newProvider = new Provider(req.body);
        await newProvider.save();
        res.status(201).json(newProvider);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all providers
exports.getAllProviders = async (req, res) => {
    try {
        const providers = await Provider.find().populate('type');
        res.status(200).json(providers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single provider by ID
exports.getProviderById = async (req, res) => {
    try {
        const provider = await Provider.findById(req.params.id).populate('type');
        if (!provider) {
            return res.status(404).json({ message: 'Provider not found' });
        }
        res.status(200).json(provider);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a provider by ID
exports.updateProvider = async (req, res) => {
    try {
        const updatedProvider = await Provider.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProvider) {
            return res.status(404).json({ message: 'Provider not found' });
        }
        res.status(200).json(updatedProvider);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a provider by ID
exports.deleteProvider = async (req, res) => {
    try {
        const provider = await Provider.findByIdAndDelete(req.params.id);
        if (!provider) {
            return res.status(404).json({ message: 'Provider not found' });
        }
        res.status(200).json({ message: 'Provider deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

