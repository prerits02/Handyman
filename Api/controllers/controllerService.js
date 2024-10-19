


const Service = require('../models/Service');


exports.addService = async (req, res) => {
    try {
        const {
            serviceName,
            category,
            subCategory,
            provider,
            serviceAddress,
            type,
            status,
            price,
            discount,
            duration,
            description,
            isFeatured,
            imageUri
        } = req.body;

        const newService = new Service({
            serviceName,
            category,
            subCategory,
            provider,
            serviceAddress,
            type,
            status,
            price,
            discount,
            duration,
            description,
            isFeatured,
            imageUri
        });

        const savedService = await newService.save();
        res.status(201).json({ message: 'Service created successfully', data: savedService });
    } catch (err) {
        res.status(500).json({ error: 'Error creating service', details: err });
    }
};


exports.getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json({ data: services });
    } catch (err) {
        res.status(500).json({ error: 'Error fetching services', details: err });
    }
};






