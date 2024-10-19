const Handyman = require('../models/handyman');
const HandymanType=require('../models/handymanType');
const HandymanPending=require('../models/handymanPending');

// Add a new Handyman
const addHandyman = async (req, res) => {
    const { firstName, lastName, userName, email, contactNumber, designation, address, userType, provider } = req.body;
    
    try {
        // Check if handyman with the same email or username exists
        const existingHandyman = await Handyman.findOne({ $or: [{ email }, { userName }] });
        if (existingHandyman) {
            return res.status(400).json({ message: 'Handyman with this email or username already exists.' });
        }

        // Create new Handyman
        const newHandyman = new Handyman({
            firstName,
            lastName,
            userName,
            email,
            contactNumber,
            designation,
            address,
            userType,
            provider
        });

        await newHandyman.save();
        res.status(201).json({ message: 'Handyman added successfully', handyman: newHandyman });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, failed to add handyman' });
    }
};

// Get all handymen
const getHandyman = async (req, res) => {
    try {
        const handymen = await Handyman.find();
        res.status(200).json(handymen);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, failed to fetch handymen' });
    }
};

// Get a single handyman by ID
const getHandymanById = async (req, res) => {
    const { id } = req.params;

    try {
        const handyman = await Handyman.findById(id);
        if (!handyman) {
            return res.status(404).json({ message: 'Handyman not found' });
        }
        res.status(200).json(handyman);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, failed to fetch handyman' });
    }
};

// Update handyman details
const updateHandyman = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, userName, email, contactNumber, designation, address, userType, provider } = req.body;

    try {
        const handyman = await Handyman.findByIdAndUpdate(
            id,
            { firstName, lastName, userName, email, contactNumber, designation, address, userType, provider },
            { new: true }
        );

        if (!handyman) {
            return res.status(404).json({ message: 'Handyman not found' });
        }

        res.status(200).json({ message: 'Handyman updated successfully', handyman });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, failed to update handyman' });
    }
};

// Add a new handyman type
const addHandymanType = async (req, res) => {
    const { typeName, commission, type, status } = req.body;

    try {
        const newHandymanType = new HandymanType({
            typeName,
            commission,
            type,
            status
        });

        await newHandymanType.save();
        res.status(201).json({ message: 'Handyman type added successfully', handymanType: newHandymanType });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, failed to add handyman type' });
    }
};

// Get all handyman types
const getHandymanTypes = async (req, res) => {
    try {
        const handymanTypes = await HandymanType.find();
        res.status(200).json(handymanTypes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, failed to fetch handyman types' });
    }
};

// Get a single handyman type by ID
const getHandymanTypeById = async (req, res) => {
    const { id } = req.params;

    try {
        const handymanType = await HandymanType.findById(id);
        if (!handymanType) {
            return res.status(404).json({ message: 'Handyman type not found' });
        }
        res.status(200).json(handymanType);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, failed to fetch handyman type' });
    }
};




// Get all pending handymen
const getPendingHandyman = async (req, res) => {
    try {
        const pendingHandymen = await HandymanPending.find({ status: 'Pending' });
        res.status(200).json(pendingHandymen);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, failed to fetch pending handymen' });
    }
};

module.exports = {
    addHandyman,
    getHandyman,
    getHandymanById,
    updateHandyman,
    addHandymanType,
    getHandymanTypes,
    getHandymanTypeById,
    getPendingHandyman,
};
