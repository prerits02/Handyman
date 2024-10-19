const Bestseller = require('../models/bestSeller');
const GroceryKitchen = require('../models/groceryKitchen');
const SnacksDrinks = require('../models/snaksDrinks');
const BeautyPersonalCare = require('../models/beautyPersonalCare');
const HouseholdEssentials = require('../models/householdEssentials');

// Get Bestsellers
const getBestsellers = async (req, res) => {
    try {
        const bestsellers = await Bestseller.find();
        res.status(200).json(bestsellers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bestsellers', error });
    }
};

// Get Grocery Kitchen Items
const getGroceryKitchen = async (req, res) => {
    try {
        const items = await GroceryKitchen.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching kitchen items', error });
    }
};

// Get Snacks and Drinks
const getSnacksDrinks = async (req, res) => {
    try {
        const items = await SnacksDrinks.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching snacks and drinks', error });
    }
};

// Get Beauty and Personal Care Items
const getBeautyPersonalCare = async (req, res) => {
    try {
        const items = await BeautyPersonalCare.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching beauty and personal care items', error });
    }
};

// Get Household Essentials
const getHouseholdEssentials = async (req, res) => {
    try {
        const items = await HouseholdEssentials.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching household essentials', error });
    }
};

module.exports = {
    getBestsellers,
    getGroceryKitchen,
    getSnacksDrinks,
    getBeautyPersonalCare,
    getHouseholdEssentials,
};
