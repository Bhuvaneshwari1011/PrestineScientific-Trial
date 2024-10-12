import React from "react";
import "./Enquiry.css";
import bannerImage from "../assets/Allpagebanner.jpg";
import enquiryImage from "../assets/tableten.webp";
import Header from "../assets/Components/Header"; // This should be fine if Header.jsx is in the same directory/ Assuming you have a Footer component

const Enquiry = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Banner Section */}
      <div className="enquiry-banner">
        <img src={bannerImage} alt="Enquiry Banner" className="banner-image" />
      </div>

      {/* Enquiry Form Section */}
      <div className="enquiry-section">
        <div className="enquiry-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input type="tel" id="contact" placeholder="Enter your contact number" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email ID</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Your message here..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="enquiry-image">
          <img src={enquiryImage} alt="Enquiry" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Enquiry;
