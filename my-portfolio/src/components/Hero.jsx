// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <span className="subtitle">Available for Opportunities</span>
        <h1>Building Digital Experiences with Precision</h1>
        <p>
          Hi, I'm a Front-End Engineer specializing in React, responsive user interfaces, 
          and clean, maintainable code. Let's turn your ideas into functional applications.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;