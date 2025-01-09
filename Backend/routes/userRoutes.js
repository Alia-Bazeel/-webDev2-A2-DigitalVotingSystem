import express from 'express';
import User from '../models/userModel.js';
const router = express.Router();

// Register new user
router.post('/', async (req, res) => {
    const { name, email, password, First_name } = req.body;

    try {
        const newUser = new User({ name, email, password, First_name });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Account not found' });
        }

        // Directly compare the password (not recommended for production)
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        res.json({ user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;