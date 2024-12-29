// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required.';
    if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters.';
    return newErrors;
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (
        savedUser &&
        savedUser.username === formData.username &&
        savedUser.password === formData.password
      ) {
        dispatch({ type: 'LOGIN_USER', payload: formData });
        navigate('/');
      } else {
        setErrors({ general: 'Invalid username or password' });
      }
    } else {
      setErrors(newErrors);
    }
  };
  
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        {errors.general && <p className="error">{errors.general}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;