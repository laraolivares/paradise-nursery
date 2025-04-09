// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartCount = 3; // Replace with dynamic cart count logic

  return (
    <header style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>
      <nav>
        <Link to="/" style={{ margin: '10px' }}>Home</Link>
        <Link to="/products" style={{ margin: '10px' }}>Products</Link>
        <Link to="/cart" style={{ margin: '10px' }}>
          Cart ({cartCount})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
