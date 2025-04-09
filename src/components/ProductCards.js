// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card" style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
      <img src={product.imageUrl} alt={product.name} style={{ width: '150px', height: '150px' }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
