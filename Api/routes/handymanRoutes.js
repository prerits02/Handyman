const express = require('express');
const {addHandyman,getHandyman,getHandymanById,updateHandyman, addHandymanType,getHandymanTypes,getHandymanTypeById, getPendingHandyman,} = require('../controllers/controllerhandyman');

const router = express.Router();

// Add a handyman
router.post('/add', addHandyman);

// Get all handymen
router.get('/', getHandyman);

// Get a handyman by ID
router.get('/:id', getHandymanById);

// Update a handyman
router.put('/:id', updateHandyman);


// Add a handyman type
router.post('/add', addHandymanType);

// Get all handyman types
router.get('/', getHandymanTypes);

// Get a handyman type by ID
router.get('/:id', getHandymanTypeById);

// Get all pending handymen
router.get('/pending', getPendingHandyman);



module.exports = router;
