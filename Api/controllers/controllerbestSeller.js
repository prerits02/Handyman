const Bestseller = require('../models/bestSeller');

// Fetch all bestsellers
const getBestsellers = async (req, res) => {
    try {
        const bestsellers = await Bestseller.find();
        res.status(200).json(bestsellers);
    } catch (error) {
        console.error('Error fetching bestsellers:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Create a new bestseller
const createBestseller = async (req, res) => {
    const { desc, img, count } = req.body;

    try {
        const newBestseller = new Bestseller({ desc, img, count });
        await newBestseller.save();
        res.status(201).json(newBestseller);
    } catch (error) {
        console.error('Error creating bestseller:', error);
        res.status(400).json({ message: 'Bad request' });
    }
};

// Update a bestseller by ID
const updateBestseller = async (req, res) => {
    const { id } = req.params;
    const { desc, img, count } = req.body;

    try {
        const updatedBestseller = await Bestseller.findByIdAndUpdate(id, {
            desc, img, count
        }, { new: true });

        if (!updatedBestseller) {
            return res.status(404).json({ message: 'Bestseller not found' });
        }

        res.status(200).json(updatedBestseller);
    } catch (error) {
        console.error('Error updating bestseller:', error);
        res.status(400).json({ message: 'Bad request' });
    }
};

// Delete a bestseller by ID
const deleteBestseller = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBestseller = await Bestseller.findByIdAndDelete(id);

        if (!deletedBestseller) {
            return res.status(404).json({ message: 'Bestseller not found' });
        }

        res.status(200).json({ message: 'Bestseller deleted' });
    } catch (error) {
        console.error('Error deleting bestseller:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getBestsellers,
    createBestseller,
    updateBestseller,
    deleteBestseller,
};
