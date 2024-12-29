// src/pages/RegistrationPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './RegistrationPage.css';

function RegistrationPage() {
  const [formData, setFormData] = useState({ firstName: '', surname: '', username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email address';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      dispatch({ type: 'REGISTER_USER', payload: formData });
      alert('Registration successful! You can now log in.');
      setFormData({ username: '', password: '', email: '' });
    } else {
      setErrors(newErrors);
    }
  };
  
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="registration-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </div>
        <div>
          <label>Surname</label>
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
        </div>
        <div>
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
