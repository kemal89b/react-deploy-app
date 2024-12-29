// src/pages/ProductDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './ProductDetailsPage.css';

function ProductDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.find((product) => product.id === parseInt(id))
  );

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    alert(`${product.name} added to cart!`);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image"/>
      <p>{product.description}</p>
      <p>Price: £{product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetailsPage;