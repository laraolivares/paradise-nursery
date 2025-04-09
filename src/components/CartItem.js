// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div style={{ margin: '10px 0', border: '1px solid #ddd', padding: '10px' }}>
      <img src={item.imageUrl} alt={item.name} style={{ width: '50px', height: '50px' }} />
      <h4>{item.name}</h4>
      <p>${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => updateQuantity(item.id, 1)}>Increase</button>
      <button onClick={() => updateQuantity(item.id, -1)}>Decrease</button>
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
