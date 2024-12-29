// src/pages/ConfirmationPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import './ConfirmationPage.css';

function ConfirmationPage() {
  const cart = useSelector((state) => state.cart);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="confirmation-page">
      <h1>Order Confirmation</h1>
      <p>Thank you for your purchase!</p>
      <div>
        <h2>Order Details:</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.uniqueKey}>
              {item.name} x {item.quantity} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <h3>Total: ${calculateTotal()}</h3>
      </div>
    </div>
  );
}

export default ConfirmationPage;