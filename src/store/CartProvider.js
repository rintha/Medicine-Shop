import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    // Check if item is already in the cart
    const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (itemInCart) {
      // If item is already in the cart, update its quantity
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If item is not in the cart, add it
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
