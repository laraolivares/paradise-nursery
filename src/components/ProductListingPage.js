// src/components/ProductListingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useCart } from './CartContext'; // Use the CartContext here

// Sample products
const products = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 50, imageUrl: '/images/fiddle-leaf-fig.webp' },
  { id: 2, name: 'Snake Plant', price: 30, imageUrl: '/images/snake-plant.jpg' },
  { id: 3, name: 'Pothos', price: 20, imageUrl: '/images/photos.jpg' },
  { id: 4, name: 'Aloe Vera', price: 25, imageUrl: '/images/aloe-vera.avif' },
  { id: 5, name: 'Monstera', price: 60, imageUrl: '/images/monstera.webp' },
  { id: 6, name: 'Peace Lily', price: 35, imageUrl: '/images/piecelily.webp' },
];

const ProductListingPage = () => {
  const { addToCart } = useCart(); // Access the addToCart function from the CartContext

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product Listing</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)} // Pass the addToCart function to ProductCard
          />
        ))}
      </div>
      <Link to="/cart">
        <button>Go to Cart</button>
      </Link>
    </div>
  );
};

export default ProductListingPage;
