const User = require('../models/newUsers');

// Fetch all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Add a new user
const createUser = async (req, res) => {
    const { name, img, phone, email } = req.body;
    
    try {
        const newUser = new User({ name, img, phone, email });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(400).json({ message: 'Bad request' });
    }
};

module.exports = {
    getUsers,
    createUser,
};
