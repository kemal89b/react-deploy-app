// src/pages/CartPage.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shippingMethod, setShippingMethod] = useState('Standard');
  const [showHelp, setShowHelp] = useState(false);

  const handleRemoveFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(item);
    } else {
      dispatch({
        type: 'UPDATE_CART_QUANTITY',
        payload: { uniqueKey: item.uniqueKey, quantity: newQuantity },
      });
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/confirmation');
  };

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={item.uniqueKey} className="cart-item">
                <div>
                  {item.name} - £{item.price.toFixed(2)}
                </div>
                <div className="cart-item-actions">
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span> {item.quantity} </span>
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button className="remove-button" onClick={() => handleRemoveFromCart(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: £{calculateTotal()}</h2>

          <div className="shipping-method">
            <h3>Select Shipping Method:</h3>
            <select
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
            >
              <option value="Standard">Standard</option>
              <option value="Express">Express</option>
              <option value="Next-Day">Next-Day</option>
            </select>
          </div>

          <button onClick={toggleHelp} className="help-button">
            {showHelp ? 'Hide Help' : 'Show Help'}
          </button>

          {showHelp && (
            <div className="help-info">
              <p><strong>Standard:</strong> Delivery within 5-7 business days.</p>
              <p><strong>Express:</strong> Delivery within 2-3 business days.</p>
              <p><strong>Next-Day:</strong> Delivery by the next business day.</p>
            </div>
          )}

          <button onClick={handleCheckout} className="checkout-button">Checkout</button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartPage;