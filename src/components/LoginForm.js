import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ setUser }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    favoriteSeason: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!nameRegex.test(formData.firstName)) {
      newErrors.firstName = 'First Name should contain only alphabets.';
    }
    if (!nameRegex.test(formData.lastName)) {
      newErrors.lastName = 'Last Name should contain only alphabets.';
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is not in a valid format.';
    }
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        'Password must contain at least 1 Alphabet, 1 Number, 1 Special Character, and 1 Uppercase Letter and 8 characters long';
    }
    if (!formData.favoriteSeason) {
      newErrors.favoriteSeason = 'Please select a favorite season.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setUser(formData);
      navigate('/profile');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className='container'>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <div>{errors.firstName}</div>}
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <div>{errors.lastName}</div>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div>{errors.email}</div>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div>{errors.password}</div>}
        </div>

        <div>
          <label>Favorite Season:</label>
          <select
            name="favoriteSeason"
            value={formData.favoriteSeason}
            onChange={handleChange}
          >
            <option value="">--Select--</option>
            <option value="Spring">Spring</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>
          {errors.favoriteSeason && <div>{errors.favoriteSeason}</div>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
