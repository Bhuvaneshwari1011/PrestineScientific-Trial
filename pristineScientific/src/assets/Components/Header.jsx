import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';// Ensure Link is imported
import Home from "../Pages/Home"; // Correct path and capitalization
import AboutUs from "../Pages/AboutUs"; // Correct path and capitalization
import Services from "../Pages/Services"; // Correct path and capitalization
import Gallery from "../Pages/Gallery"; // Ensure correct path and capitalization
import Enquiry from "../Pages/Enquiry"; // Correct path and capitalization
import ContactUs from "../Pages/ContactUs"; // Correct path and capitalization

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Pristine Scientific</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/enquiry">Enquiry</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
