import React from "react";
import "./Home.css";
import aboutUsImage from '../assets/aboutUs.jpg';
import para from '../assets/par.jpg';
import serviceImage1 from '../assets/Service1.jpg';
import serviceImage2 from "../assets/Service2.jpeg";
import serviceImage3 from '../assets/Service3.jpg';
import serviceImage4 from '../assets/Service4.webp';
import serviceImage5 from '../assets/Service5.jpg';
import rotatingVials from "../assets/rotating-vials.gif"; 
import whoWeAreImage from "../assets/gallery/whower.jpg";
import gif1 from '../assets/gif1.gif';
import gif2 from '../assets/gif2.gif';
import gif3 from '../assets/gif3.gif';

const Home = () => {
  return (
    <div className="home-container">
      {/* OUR SERVICES Section */}
      <div className="services-section">
        <p>
          MANJUCHEMTECH is a chemical trading company situated in Bangalore. It was established with the sole aim of providing a one-stop solution for all chemical products for our customers. Our mission is to provide the best product available, evaluated against the toughest standards in the industry.
        </p>

        <div className="par-section">
          <img src={para} alt="pic" className="para-image" />
          <div className="text-segment">
            {[
              {
                title: "INDUSTRIAL CHEMICAL & SOLVENTS",
                description: "Organic solvents are commonly used in the pharmaceutical industry as reaction media, in separation and purification of synthesis products."
              },
              {
                title: "HERBAL EXTRACTS CHEMICALS",
                description: "A herbal extract is a substance made by extracting a part of a herbal raw material, often by using a solvent such as methanol or water."
              },
              {
                title: "PHARMACEUTICAL INDUSTRY",
                description: "The pharmaceuticals industry consists of drug manufacturers, biotechnology companies, and the distribution and wholesale companies."
              },
              {
                title: "ELECTRONIC INDUSTRIES",
                description: "Gallium is a great element widely used in the electronics industry due to its similar structure to silicon."
              }
            ].map((service, index) => (
              <div className="text-block" key={index}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Us Section */}
        <div className="about-us">
          <div className="about-text">
            <h3>About Us</h3>
            <p>
              We know that competition is getting tougher with each passing day as more Indian and International companies enter the market. However, we believe in serving with a smile and having long-lasting relationships with our clients, which helps us fight the competition.
            </p>
          </div>
          <img src={aboutUsImage} alt="About Us" className="about-image" />
        </div>

        {/* Our Services Section */}
        <div className="our-services">
          <h2>OUR SERVICES</h2>
          <p>
            We provide Industrial chemicals & solvents, laboratory chemicals, Glassware & Instruments & Water Treatment chemicals for various industries: Herbal extract, Pharmaceutical, Electronics, and more.
          </p>
        </div>
      </div>

      {/* Service Images Section */}
      <div className="service-images">
        {[serviceImage1, serviceImage2, serviceImage3, serviceImage4, serviceImage5].map((image, index) => (
          <img key={index} src={image} alt={`Service ${index + 1}`} className="service-image" loading="lazy" />
        ))}
      </div>

      {/* GIF Section */}
      <div className="gif-container">
        <img src={rotatingVials} alt="Rotating Vials" className="gif-image" loading="lazy" />
      </div>

      {/* Our Mission Section */}
      <div className="our-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide the best product available, evaluated against the toughest standards in the industry.
        </p>
      </div>

      {/* WHO WE ARE Section */}
      <div className="who-we-are">
        <div className="who-we-are-text">
          <h2>WHO WE ARE?</h2>
          <p>
            MANJUCHEMTECH is a chemical trading company situated in Bangalore. We provide a one-stop solution for all chemical products for our customers, with a strong commitment to quality and customer satisfaction.
          </p>
        </div>
        <div className="who-we-are-image">
          <img src={whoWeAreImage} alt="Who We Are" className="image" />
        </div>
      </div>

      {/* Quote Section */}
      <div className="quote-section">
        <blockquote>
          “Medicine is a science of uncertainty and an art of probability.”
        </blockquote>
        <div className="gif-container">
          {[gif1, gif2, gif3].map((gif, index) => (
            <img key={index} src={gif} alt={`GIF ${index + 1}`} className="gif-image" loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
