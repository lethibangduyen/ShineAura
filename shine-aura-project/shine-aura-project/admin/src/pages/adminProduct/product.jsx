// AdminProducts.jsx
import React, { useState, useEffect } from 'react';
import './product.css';

function AdminProducts(){
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    productName: '',
    price: 0,
    productType: '',
    brands: '',
  });

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState([]);

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      const productsData = await response.json();
      setProducts(productsData || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Fetch products on component mount

  useEffect(() => {
    setVisibleProducts(products.slice(0, 10));
  }, [products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const addProduct = async () => {
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        fetchProducts();
        setNewProduct({ productName: '', price: 0, productType: '', brands: '' });
      } else {
        console.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const updateProduct = async () => {
    if (!selectedProduct) return;

    try {
      const response = await fetch(`http://localhost:3000/products/${selectedProduct.productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedProduct),
      });

      if (response.ok) {
        fetchProducts();
        setSelectedProduct(null);
      } else {
        console.error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchProducts();
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const selectProductForUpdate = (product) => {
    setSelectedProduct(product);
  };

  const handleSeeMore = () => {
    const currentLength = visibleProducts.length;
    setVisibleProducts([...visibleProducts, ...products.slice(currentLength, currentLength + 10)]);
  };

  return (
    <main className='main-container'>
    <div className="admin-products-container">
      <h2>Admin Products</h2>

      {/* Add new product form */}
      <div className="new-product-form">
        <h3>Add New Product</h3>
        <form onSubmit={(e) => { e.preventDefault(); addProduct(); }}>
          <label>Product Name:</label>
          <input type="text" name="productName" value={newProduct.productName} onChange={handleInputChange} required />

          <label>Price:</label>
          <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} required />

          <label>Product Type:</label>
          <input type="text" name="productType" value={newProduct.productType} onChange={handleInputChange} required />

          <label>Brands:</label>
          <input type="text" name="brands" value={newProduct.brands} onChange={handleInputChange} required />

          <button type="submit">Add Product</button>
        </form>
      </div>

      {/* Display existing products */}
      <div className="existing-products">
        <h3>Existing Products</h3>
        <ul>
          {visibleProducts.map((product) => (
            <li key={product.productId}>
              <strong>{product.productName}</strong> - ${product.price} - {product.productType} - {product.brands}
              <button onClick={() => selectProductForUpdate(product)}>Update</button>
              <button onClick={() => deleteProduct(product.productId)}>Delete</button>
            </li>
          ))}
        </ul>
        {products.length > visibleProducts.length && (
          <button className="see-more-button" onClick={handleSeeMore}>
            See More
          </button>
        )}
      </div>

      {/* Update product form */}
      {selectedProduct && (
        <div className="update-product-form">
          <h3>Update Product</h3>
          <form onSubmit={(e) => { e.preventDefault(); updateProduct(); }}>
            {/* ... (form fields with values from selectedProduct) */}
            <button type="submit">Update Product</button>
          </form>
        </div>
      )}
    </div>
    </main>
  );
};

export default AdminProducts;
