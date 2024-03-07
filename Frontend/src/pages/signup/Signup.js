import React, { useState } from 'react';
import zxcvbn from 'zxcvbn'; // Password strength checker
import axios from 'axios';
import './Signup.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    role: "Student",
  });
  const [passwordError, setPasswordError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
    
  const router = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "password") {
      const score = zxcvbn(e.target.value).score;
      setPasswordStrength(score);
    }
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()-+=^])(?!.*\s).{8,15}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match.");
    } else if (!validatePassword(formData.password)) {
      setPasswordError("Password must meet all criteria.");
    } else {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
        console.log(response.data);
        router('/login');
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  };

  return (
    <div>
      <header className="header">
        <h1>College Lost and Found Portal</h1>
      </header>
      <section className="form-section">
        <div className="form-container">
          <h3 className="form-title">
            Create an <span className="highlight">account</span>
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="input-field"
                required
              />
              <div className="password-strength">
                Password Strength:{" "}
                <progress
                  value={passwordStrength}
                  max="4"
                  className={`progress-${passwordStrength}`}
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="input-field"
                required
              />
            </div>
            {passwordError && <p className="error-message">{passwordError}</p>}
            <div className="form-group">
              <button
                type="submit"
                className="submit-button"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="form-footer">
            Already have an account?{" "}
            <Link to="/login" className="highlight">
              Login
            </Link>
          </p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} College Lost and Found Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Signup;
