const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_url: String,
    product_id: String,
    product_name: String,
    product_type: String,
    price: Number,
    images: [String],
    variants: [String],
    brands: String,
    tab_data: {
        description: [String],
        ingredients: [String],
        effects: [String],
        instruction: [String]
    }
});

const ProductsArraySchema = new mongoose.Schema({
    products: [ProductSchema]
});

const Product = mongoose.model('Product', ProductSchema, 'myCollection');

module.exports = ProductArray;