import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Enter your message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
