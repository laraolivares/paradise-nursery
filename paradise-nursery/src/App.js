// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';
import Header from './components/Header';
import { CartProvider } from './components/CartContext'; // Correct import of CartProvider

function App() {
  return (
    <CartProvider> {/* Wrap the entire app in CartProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
