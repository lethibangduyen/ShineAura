const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
