import React from "react";
import "./ContactUs.css";
import Header from "../assets/Components/Header"; // Adjust the path based on your directory structure
import Footer from "../assets/Components/Footer"; // Adjust this path as well
import bannerImage from "../assets/Allpagebanner.jpg"; // Import your banner image


const ContactUs = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Banner Section */}
      <div className="contact-banner">
        <img src={bannerImage} alt="Contact Us Banner" className="banner-image" />
      </div>

      {/* Contact Details Section */}
      <div className="contact-details-section">
        {/* Address Section */}
        <div className="address">
          <h2>Our Address</h2>
          <p>1234 Street Name,</p>
          <p>Bangalore, India</p>
          <p>Postal Code - 560001</p>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            <strong>Phone:</strong> 
            <a href="tel:+919876543210">+91 9876543210</a>
          </p>
          <p>
            <strong>Email:</strong> 
            <a href="mailto:info@manjuchemtech.com">info@manjuchemtech.com</a>
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30442.564594034243!2d77.59456204999999!3d12.971598699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670e5cf1c53%3A0x6fae8d8d0f8c2c2!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1634897282630!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
