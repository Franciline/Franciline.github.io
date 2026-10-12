import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <p>
            Contact me on{' '}
            <a href="https://www.linkedin.com/in/amelie-chu" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
