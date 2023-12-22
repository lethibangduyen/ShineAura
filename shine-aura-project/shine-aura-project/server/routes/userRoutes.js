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

router.get('/signin', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (user) {
        if (user.password === password) {
          res.json('Success');
        } else {
          res.json('Mật khẩu không đúng');
        }
      } else {
        res.json('Email không tồn tại');
      }
    } catch (error) {
      console.error(error);
      res.status(500).json('Lỗi máy chủ');
    }
  });
  
  
  
module.exports = router;
