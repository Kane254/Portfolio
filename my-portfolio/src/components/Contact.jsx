// src/components/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Let's Collaborate</h2>
      <p>Have a question or want to work together? Drop a message below.</p>
      
      {/* Replace your-formspree-id with a real form endpoint when ready */}
      <form action="https://formspree.io/f/your-formspree-id" method="POST" className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="Kennedy" />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="kennedy@example.com" />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required placeholder="Tell me about your project..."></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;