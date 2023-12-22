// routes/userRoutes.js
const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  try {
    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
  
module.exports = router;
