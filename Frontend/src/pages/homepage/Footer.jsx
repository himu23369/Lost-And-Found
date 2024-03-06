// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import the Link component

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">LostNFound Store</h2>
          <p className="text-sm">Providing lost and found solutions</p>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/home" className="hover:text-gray-400 cursor-pointer">Home</Link>
          <Link to="/about" className="hover:text-gray-400 cursor-pointer">About Us</Link>
          <Link to="/contact" className="hover:text-gray-400 cursor-pointer">Contact</Link>
          <Link to="/privacy-policy" className="hover:text-gray-400 cursor-pointer">Privacy Policy</Link>
        </div>


        <div className="flex items-center space-x-4">
          <span className="text-xl hover:text-gray-400 cursor-pointer">
            <FaFacebook />
          </span>
          <span className="text-xl hover:text-gray-400 cursor-pointer">
            <FaTwitter />
          </span>
          <span className="text-xl hover:text-gray-400 cursor-pointer">
            <FaInstagram />
          </span>
          <span className="text-xl hover:text-gray-400 cursor-pointer">
            <FaLinkedin />
          </span>
          <span className="text-xl hover:text-gray-400 cursor-pointer">
            <FaGithub />
          </span>
        </div>
      </div>

      <div className="bg-gray-700 text-center py-2">
        <p className="text-sm">&copy; {new Date().getFullYear()} LostNFound Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
