// src/components/ShoppingCartPage.js
import React from 'react';
import { useCart } from './CartContext'; // Import the CartContext

const ShoppingCartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity); // Update quantity if greater than 0
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
                borderBottom: '1px solid #ddd',
                padding: '10px 0',
              }}
            >
              <img src={item.imageUrl} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <div style={{ flex: 1 }}>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <div>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px' }}>
                Remove
              </button>
            </div>
          ))}
          <h3>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
          <button>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
