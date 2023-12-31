const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Import your Product model

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST a new product
router.post('/', async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      if (error.name === 'ValidationError') {
        // Handle validation errors
        res.status(400).json({ error: error.message });
      } else {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  });
  
router.get('/products/:id', async (req, res) => {
    const productId = req.params.id;
  
    try {
      const product = await Product.findById(productId);
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      console.log('Product by ID:', product);
      res.json(product);
    } catch (error) {
      console.error('Error fetching product by ID:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Route: Cập nhật thông tin của một sản phẩm theo ID
  router.put('/products/:id', async (req, res) => {
    const productId = req.params.id;
    const { productName, price, productType, brands } = req.body;
  
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { productName, price, productType, brands },
        { new: true }
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      console.log('Updated Product:', updatedProduct);
      res.json(updatedProduct);
    } catch (error) {
      console.error('Error updating product by ID:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Route: Xóa một sản phẩm theo ID
  router.delete('/products/:id', async (req, res) => {
    const productId = req.params.id;
  
    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);
  
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      console.log('Deleted Product:', deletedProduct);
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error('Error deleting product by ID:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  module.exports = router;