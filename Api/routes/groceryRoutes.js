const express = require('express');
const {getBestsellers,getGroceryKitchen,getSnacksDrinks,getBeautyPersonalCare,getHouseholdEssentials,} = require('../controllers/controllergrocery');

const router = express.Router();

// Get all bestsellers
router.get('/bestsellers', getBestsellers);

// Get all grocery kitchen items
router.get('/grocery-kitchen', getGroceryKitchen);

// Get all snacks and drinks
router.get('/snacks-drinks', getSnacksDrinks);

// Get all beauty and personal care items
router.get('/beauty-personal-care', getBeautyPersonalCare);

// Get all household essentials
router.get('/household-essentials', getHouseholdEssentials);

module.exports = router;
