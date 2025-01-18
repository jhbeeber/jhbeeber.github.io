import React from 'react';
import Navigation from './Navigation';
import { FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const email = "james.h.beeber@gmail.com";

  return (
    <div>
      <Navigation />
      <main className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <a href={`mailto:${email}`} className="contact-link">
              {email}
            </a>
          </div>
        </div>
        <div className="resume-container">
          <h3>Resume</h3>
          <iframe
            src={process.env.PUBLIC_URL + '/resume.pdf'}
            title="Resume"
            width="100%"
            height="800px"
            style={{
              border: 'none',
              borderRadius: '10px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default Contact;