const ProviderType = require('../models/ProviderType');

// Create a new provider type
exports.createProviderType = async (req, res) => {
    try {
        const newProviderType = new ProviderType(req.body);
        await newProviderType.save();
        res.status(201).json(newProviderType);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all provider types
exports.getAllProviderTypes = async (req, res) => {
    try {
        const providerTypes = await ProviderType.find();
        res.status(200).json(providerTypes);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a provider type by ID
exports.updateProviderType = async (req, res) => {
    try {
        const updatedProviderType = await ProviderType.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProviderType) {
            return res.status(404).json({ message: 'Provider Type not found' });
        }
        res.status(200).json(updatedProviderType);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a provider type by ID
exports.deleteProviderType = async (req, res) => {
    try {
        const providerType = await ProviderType.findByIdAndDelete(req.params.id);
        if (!providerType) {
            return res.status(404).json({ message: 'Provider Type not found' });
        }
        res.status(200).json({ message: 'Provider Type deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getPendingProviders = async (req, res) => {
    try {
      const providers = await Provider.find({ status: 'pending' });
      res.json(providers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };