// controllers/categoryController.js
const Category = require('../models/Category');

// Get all categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new category
exports.createCategory = async (req, res) => {
    const { name, img, status, description, isFeatured } = req.body;
    const category = new Category({ name, img, status, description, isFeatured });

    try {
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a category
exports.updateCategory = async (req, res) => {
    const { name, img, status, description, isFeatured } = req.body;

    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, 
            { name, img, status, description, isFeatured }, 
            { new: true }
        );
        res.json(updatedCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


