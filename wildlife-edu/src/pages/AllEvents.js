// src/pages/AllEvents.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AllEvents.css'; // Assuming a new CSS file for this page

const AllEvents = () => {
  return (
    <div className="allevents">
    <div className="all-events">
      <h2>Take part in these exciting events!</h2>

      {/* Event List Section */}
      <div className="events-list">
        {/* Individual Event Items */}
        <div className="event-item">
          <img src="/wildlife-workshop.jpg" alt="Wildlife Conservation Workshop" className="event-image" />
          <div className="event-details">
            <strong>Wildlife Conservation Workshop</strong>
            <p>Date: October 25, 2024</p>
            <p>Location: Community Center, City Hall</p>
          </div>
        </div>

        <div className="event-item">
          <img src="/beach-cleanup.jpg" alt="Beach Cleanup Day" className="event-image" />
          <div className="event-details">
            <strong>Beach Cleanup Day</strong>
            <p>Date: November 5, 2024</p>
            <p>Location: Local Beach Park</p>
          </div>
        </div>

        <div className="event-item">
          <img src="/wildlife-photography.jpg" alt="Wildlife Photography Exhibition" className="event-image" />
          <div className="event-details">
            <strong>Wildlife Photography Exhibition</strong>
            <p>Date: December 1-15, 2024</p>
            <p>Location: City Art Gallery</p>
          </div>
        </div>
        <div className="event-item">
          <img src="/kwita-izina.jpg" alt="Kwita izina Day" className="event-image" />
          <div className="event-details">
            <strong>Kwita izina Day</strong>
            <p>Date: November 29, 2024</p>
            <p>Location: Volucano National Park</p>
          </div>
        </div>
        {/* Add more event items here */}
      </div>

      {/* Back to Home Button */}
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
    {/* Footer Section */}
    <footer className="footer">
        <div className="footer-logo">
          <img src="/WildlifeEduLogo.jpg" alt="Wildlife EDU Logo" className="footer-logo-image" />
        </div>
        <div className="footer-links">
          <Link to="/Donate">Do you want to support us?</Link>
          <Link to="/Privacy">Privacy Policy</Link>
          <Link to="/Terms">Terms of Service</Link>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.jpg" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.jpg" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.jpg" alt="Instagram" className="social-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AllEvents;
