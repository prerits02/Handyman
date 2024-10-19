// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/controllercategory');

// Define the routes
router.get('/', getCategories);
router.post('/', createCategory);
router.put('/:id', updateCategory);


module.exports = router;
