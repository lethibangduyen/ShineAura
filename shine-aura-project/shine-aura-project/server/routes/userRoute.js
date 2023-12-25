// userRoutes.js
const express = require('express');
const User = require('../models/User');
const passport = require('passport');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

// Get current user
router.get('/users', authenticateToken, (req, res) => {
  try {
    // If the user is logged in, req.user will contain the user's information
    const currentUser = req.user;

    if (!currentUser) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    res.json(currentUser);
    console.log('Current user:', currentUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update current user information
router.put('/users', authenticateToken, async (req, res) => {
    // If the user is logged in, req.user will contain the user's information
    const currentUser = req.user;
  
    if (!currentUser) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
  
    const { fullName, gender, dateOfBirth } = req.body;
  
    // Validate input data
    if (!fullName || !gender || !dateOfBirth) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    try {
      // Use the _id of the current user from req.user to update information
      const updatedUser = await User.findByIdAndUpdate(
        currentUser.userId, // Assuming the user ID is stored in req.user.userId
        { $set: { fullName, gender, dateOfBirth } },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  module.exports = router;
  