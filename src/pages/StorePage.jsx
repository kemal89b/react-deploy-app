// src/pages/StorePage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './StorePage.css';

function StorePage() {
  const products = useSelector((state) => state.products);

  return (
    <div className="store-page">
      <h1>Store</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image"/>
            <h3>{product.name}</h3>
            <p>£{product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StorePage;