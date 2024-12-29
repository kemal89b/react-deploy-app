// src/App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import StorePage from './pages/StorePage';
import CartPage from './pages/CartPage';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ConfirmationPage from './pages/ConfirmationPage';
import './styles/global.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedUser = localStorage.getItem('user');
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
    }
    if (savedUser) {
      dispatch({ type: 'LOAD_USER', payload: JSON.parse(savedUser) });
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;