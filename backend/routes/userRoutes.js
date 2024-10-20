// server/routes/userRoutes.js

const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controller/userController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

// Route for registering a new user
router.post('/register', registerUser);

// Route for logging in a user
router.post('/login', loginUser);

// Route for getting the user's profile (protected)
router.get('/profile', authenticateToken, getUserProfile);

module.exports = router;