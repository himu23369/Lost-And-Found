import React, { useState } from 'react';
import zxcvbn from 'zxcvbn'; // Password strength checker
import axios from 'axios';
import './Signup.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    // Regular expressions for individual criteria
    const containsNumber = /\d/.test(password);
    const containsLowercase = /[a-z]/.test(password);
    const containsUppercase = /[A-Z]/.test(password);
    const containsSpecialCharacter = /[!@#$%&*()-+=^]/.test(password);
    const hasValidLength = password.length >= 8 && password.length <= 15;

    // Check each criterion and return specific error message if it fails
    if (!containsNumber) {
      return "Password must contain at least one number.";
    } else if (!containsLowercase) {
      return "Password must contain at least one lowercase letter.";
    } else if (!containsUppercase) {
      return "Password must contain at least one uppercase letter.";
    } else if (!containsSpecialCharacter) {
      return "Password must contain at least one special character (!@#$%&*()-+=^).";
    } else if (!hasValidLength) {
      return "Password must be between 8 and 15 characters long.";
    }

    // If all criteria pass, return null to indicate success
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password
    const passwordError = validatePassword(formData.password);

    // Display appropriate toast if there's a password error
    if (passwordError) {
      toast.error(passwordError);
      setPasswordError(passwordError); // Optionally set state for password error message
      return; // Exit early if there's a password error
    }
    else {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
        console.log(response.data);
        toast.success('Account Created Successfully');
        router('/login');
      } catch (error) {
        console.error('Error:', error.message);
        toast.error('Account Creation Failed');
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
