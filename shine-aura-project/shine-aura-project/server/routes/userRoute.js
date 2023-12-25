const express = require('express');
const User = require('../models/User');
const passport = require('passport');

const router = express.Router();

// Get current user
router.get('/users', (req, res) => {
    try {
      // If the user is logged in, req.user will contain the user's information
      const currentUser = req.user;
      res.json(currentUser);
      console.log('Current user:', currentUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

// Update current user information
router.put('/users', async (req, res) => {
    // If the user is logged in, req.user will contain the user's information
    const currentUser = req.user;
  
    const { fullName, gender, dateOfBirth } = req.body;
  
    try {
      // Use the _id of the current user from req.user to update information
      const updatedUser = await User.findByIdAndUpdate(
        currentUser._id,
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
