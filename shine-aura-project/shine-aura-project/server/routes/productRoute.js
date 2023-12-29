// routes/productRoute.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Định nghĩa route để lấy toàn bộ sản phẩm
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
