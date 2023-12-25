const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      if (user.password === password) {
        // Tạo token với thông tin userId
        const token = jwt.sign({ userId: user._id }, 'shineaura', { expiresIn: '1h' });

        // Trả về token
        res.json({ token });
      } else {
        res.status(401).json('Mật khẩu không đúng');
      }
    } else {
      res.status(404).json('Email không tồn tại');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json('Lỗi máy chủ');
  }
});


module.exports = router;


