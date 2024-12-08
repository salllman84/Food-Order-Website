import React, { useState } from 'react';
import './Signup.css'; // Importing the CSS file for styling

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState(''); // Error message state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;

    // Basic validation to check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    // Handle signup logic (e.g., API call or redirection)
    console.log('Form submitted with data:', formData);

    // Reset error state and form if necessary
    setError('');
    setFormData({ email: '', password: '', confirmPassword: '' });
  };

  const handleGoogleSignup = () => {
    // Here you will handle Google login, e.g., using Firebase or a custom API
    console.log('Google Sign-Up clicked');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {error && <div className="error">{error}</div>} {/* Display error if passwords don't match */}

        <button type="submit" className="done-button">Sign Up</button>
        <button type="button" className="google-button" onClick={handleGoogleSignup}>Sign Up with Google</button>
      </form>
    </div>
  );
};

export default Signup;
