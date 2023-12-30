const express = require('express');
const router = express.Router();
const ProductModel = require('../models/Product');
const CartModel = require('../models/Cart');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, async (req, res) => {
  const { userId } = req.user;
  
  try {
    const cart = await CartModel.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }
 
    const cartItemsArray = cart.items.map(item => ({
      _id: item._id,
      productId: item.productId,
      quantity: item.quantity
    }));
 
    res.json(cartItemsArray);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

router.post('/', authMiddleware, async (req, res) => {
  const { userId } = req.user;
  const { productId } = req.body;

  try {
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    let existingCart = await CartModel.findOne({ userId });

    if (existingCart) {
      const itemIndex = existingCart.items.findIndex(item => item.productId.toString() === productId);
      if (itemIndex > -1) {
        existingCart.items[itemIndex].quantity += 1;
      } else {
        existingCart.items.push({ productId, quantity: 1 });
      }
      await existingCart.save();
    } else {
      existingCart = await CartModel.create({ userId, items: [{ productId, quantity: 1 }] });
    }

    res.json({ success: true, message: 'Product added to cart successfully', cart: existingCart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.toString() });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  const { userId } = req.user;
  const { id } = req.params;
 
  try {
    const cart = await CartModel.findOne({ userId });
 
    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }
 
    const itemIndex = cart.items.findIndex(item => item.productId.toString() === id);
 
    if (itemIndex === -1) {
      return res.status(404).json({ success: false, message: 'Product not found in cart' });
    }
 
    cart.items.splice(itemIndex, 1);
    await cart.save();
 
    res.json({ success: true, message: 'Product removed from cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});
 

router.put('/:id', authMiddleware, async (req, res) => {
  const { userId } = req.user;
  const { id } = req.params;
  const { newQuantity } = req.body;
 
  try {
    const cart = await CartModel.findOne({ userId });
 
    if (!cart) {
      return res.status(404).json({ success: false, message: 'Cart not found' });
    }
 
    const itemIndex = cart.items.findIndex(item => item.productId.toString() === id);
 
    if (itemIndex === -1) {
      return res.status(404).json({ success: false, message: 'Product not found in cart' });
    }
 
    cart.items[itemIndex].quantity = newQuantity;
    await cart.save();
 
    res.json({ success: true, message: 'Product quantity updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}); 

module.exports = router;