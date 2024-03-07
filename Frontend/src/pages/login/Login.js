import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import external CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberPassword: false,
  });


  const router = useNavigate();

  const handleInputChange = (e) => {
    if (e.target.name === 'rememberPassword') {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      // setToken(response.data.token);
      toast.success('Login Successful');
      console.log(response.data);
      router('/homepage');
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Login Failed');
    }
  };

  return (
    <div className="login-container">
      <header className="header bg-red-900 text-white px-4 py-2">
        <h1>College Lost and Found Portal</h1>
        <nav>
          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label htmlFor="nav-toggle" className="nav-toggle-label">
            <span></span>
          </label>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="content">
        <div className="login-form-container">
          
          <div className="login-form">
            <h2 className="welcome-text">Welcome Back 🎉</h2>
            <form onSubmit={submitHandler}>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-field"
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="input-field"
                required
              />
              <div className="remember-password">
                <input
                  type="checkbox"
                  id="rememberPassword"
                  name="rememberPassword"
                  checked={formData.rememberPassword}
                  onChange={handleInputChange}
                />
                <label htmlFor="rememberPassword">Remember Password</label>
              </div>
              <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
              {/* <button type="submit" className="login-button"><Link to="/homepage">Login</Link></button> */}
              <button type="submit" className="login-button">Login</button>

            </form>
            <p className="create-account-text">
              Don't have an account? <Link to="/signup" className="signup-link">Create one.</Link>
            </p>
          </div>
        </div>
      </section>
      <footer className="footer bg-red-900 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} College Lost and Found Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
