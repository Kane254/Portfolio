// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Kennedy</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="/resume.docx" target="_blank" rel="noreferrer" className="resume-btn">
        Resume 📄
      </a>
    </nav>
  );
}

export default Navbar;