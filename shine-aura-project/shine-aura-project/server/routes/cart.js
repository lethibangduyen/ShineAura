const express = require('express');
const router = express.Router();
const ProductModel = require('../models/Product');
const CartModel = require('../models/cart');
const authMiddleware = require('../middleware/auth');

router.post('/cart', authMiddleware, async (req, res) => {
  const { userId } = req.user;
  const { productId } = req.body;

  try {
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    const existingCartItem = await CartModel.findOne({ userId, productId });

    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      await CartModel.create({ userId, productId });
    }

    res.json({ success: true, message: 'Product added to cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;
