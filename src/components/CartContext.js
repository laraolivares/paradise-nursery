// src/components/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context
const CartContext = createContext();

// CartProvider component to wrap the app and manage cart state
export const CartProvider = ({ children }) => {
  // Initial cart items (default items in the cart)
  const initialCart = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 50, imageUrl: '/images/fiddle-leaf-fig.jpg', quantity: 2 },
    { id: 2, name: 'Snake Plant', price: 30, imageUrl: '/images/snake-plant.jpeg', quantity: 1 },
  ];

  const [cart, setCart] = useState(initialCart);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Function to update item quantity in the cart
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};
