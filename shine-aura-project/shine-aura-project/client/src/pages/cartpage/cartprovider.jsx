// CartContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context
const CartContext = createContext();

// Create a custom hook for using the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItemCount, setCartItemCount] = useState(0);

  const addToCart = () => {
    // Implement your logic to add an item to the cart
    // This is just a placeholder, you need to replace it with your actual logic
    console.log('Item added to the cart');
  };

  const updateCartItemCount = (count) => {
    setCartItemCount(count);
  };

  const cartValues = {
    cartItemCount,
    addToCart,
    updateCartItemCount,
  };

  return <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>;
};
