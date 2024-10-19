const express = require('express');
const {
    getBestsellers,
    createBestseller,
    updateBestseller,
    deleteBestseller,
} = require('../controllers/controllerbestSeller');

const router = express.Router();

// Route to fetch all bestsellers
router.get('/', getBestsellers);

// Route to create a new bestseller
router.post('/', createBestseller);

// Route to update a bestseller by ID
router.put('/:id', updateBestseller);

// Route to delete a bestseller by ID
router.delete('/:id', deleteBestseller);

module.exports = router;
