// src/context/CartContext.js

import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage'; // <--- Import the new hook

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

// Key name for local storage
const CART_STORAGE_KEY = 'floral_cart'; 

export const CartProvider = ({ children }) => {
    // CHANGE THIS: Use useLocalStorage instead of useState
    const [cartItems, setCartItems] = useLocalStorage(CART_STORAGE_KEY, []); 

    const addToCart = (item) => {
        // ... (Your existing addToCart logic)
        setCartItems(prevItems => {
            // Example: check if item already exists and update quantity
            const existingItem = prevItems.find(i => i.id === item.id);

            if (existingItem) {
                return prevItems.map(i =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(id);
            return;
        }
        setCartItems(prevItems => 
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };


    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        // ... other cart functions
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};