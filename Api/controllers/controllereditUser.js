const User = require('../models/editUser');

// Get user by ID (optional for updating purposes)
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Update user
exports.updateUser = async (req, res) => {
    try {
        const { firstName, lastName, username, email, contactNumber, designation, address } = req.body;

        const user = await User.findByIdAndUpdate(req.params.id, {
            firstName,
            lastName,
            username,
            email,
            contactNumber,
            designation,
            address
        }, { new: true });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Soft delete user
exports.softDeleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { isDeleted: true }, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User soft deleted successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Restore soft deleted user
exports.restoreUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { isDeleted: false }, { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User restored successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// Force delete user (Permanent deletion)
exports.forceDeleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User permanently deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
