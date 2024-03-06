import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
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
      <section id="about" className="section about-section">
        <h2>About Us</h2>
        <p>Welcome to the College Lost and Found Portal, where you can report lost items or find lost items within our campus community.</p>
      </section>
      <section id="services" className="section services-section">
        <h2>Our Services</h2>
        <ul>
          <li>Report lost items</li>
          <li>Search for lost items</li>
          <li>Claim found items</li>
          <li>Connect with others who have lost or found items</li>
        </ul>
      </section>
      <section id="contact" className="section contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns, feel free to reach out to us at <a href="mailto:LostNFound@thapar.edu">LostNFound@thapar.edu</a>.</p>
      </section>
      <section id="login" className="section login-section">
        <button className="get-started-button"><Link to="/login">Login</Link></button>
        {/* Add your login component here */}
      </section>
      <section id="signup" className="section signup-section">
        <button className="get-started-button"><Link to="/signup">Sign Up</Link></button>
        {/* Add your signup component here */}
      </section>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} College Lost and Found Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
