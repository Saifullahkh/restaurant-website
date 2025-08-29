import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add to Cart with quantity
  const addToCart = (restaurant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === restaurant.id);
      if (existingItem) {
        // Item exists → increase quantity
        return prevCart.map((item) =>
          item.id === restaurant.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        // New item → quantity = 1
        return [...prevCart, { ...restaurant, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // prevent 0 or negative
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
