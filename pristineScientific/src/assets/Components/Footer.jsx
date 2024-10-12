// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Ensure your CSS file is imported

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        
        {/* Company Description Section */}
        <div className="row">
          <div className="col-md-12 footer-section">
            <h2>MANJU CHEMTECH</h2>
            <span className="footer-description">
              It is a chemical trading company situated in Bangalore. It was established with the sole aim of providing a one-stop solution for all chemical products for our customers.
            </span>
          </div>
        </div>

        {/* Menu Section */}
        <div className="row">
          <div className="col-md-12 footer-section">
            <h3>MENU</h3>
            <ul>
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>SERVICES</li>
              <li>GALLERY</li>
              <li>ENQUIRY</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </div>

        {/* Address and Contact Section */}
        <div className="row">
          <div className="col-md-12 footer-section">
            <h3>ADDRESS</h3>
            <p>No. 50, SIR M.V.Layout, 7th Block, Muddaiahnapalya, Vishwaneedam, Bangalore-560091</p>
            
            <h3>CONTACT US</h3>
            <p>+91 9880326096</p>
          </div>
        </div>

        {/* Email ID Section */}
        <div className="row">
          <div className="col-md-12 footer-section">
            <h3>EMAIL ID</h3>
            <p>manjuchemtech@yahoo.com</p>
            <p>manjuchemtech@gmail.com</p>
          </div>
        </div>

        {/* Footer Copyright Section */}
        <div className="row">
          <div className="col-md-12 footer-section text-center">
            <p>© 2022 MANJU CHEM TECH. All rights reserved. Designed and Developed By Adyasoft Infotech Pvt Ltd</p>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
