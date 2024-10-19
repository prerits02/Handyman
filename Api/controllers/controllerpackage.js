const Package = require('../models/package');

// Create a new package
exports.createPackage = async (req, res) => {
    try {
        const { packageName, provider, service, description, price, startDate, endDate, status, image, isFeatured } = req.body;

        const newPackage = new Package({
            packageName,
            provider,
            service,
            description,
            price,
            startDate,
            endDate,
            status,
            image,
            isFeatured
        });

        await newPackage.save();
        res.status(201).json(newPackage);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all packages
exports.getAllPackages = async (req, res) => {
    try {
        const packages = await Package.find().populate('provider').populate('service');
        res.status(200).json(packages);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a specific package by ID
exports.getPackageById = async (req, res) => {
    try {
        const package = await Package.findById(req.params.id).populate('provider').populate('service');
        if (!package) {
            return res.status(404).json({ message: 'Package not found' });
        }
        res.status(200).json(package);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a package by ID
exports.updatePackage = async (req, res) => {
    try {
        const updatedPackage = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPackage) {
            return res.status(404).json({ message: 'Package not found' });
        }
        res.status(200).json(updatedPackage);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


