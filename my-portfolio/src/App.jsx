import React from 'react';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import About from './components/About';
import './App.css'; // Add your styling here later!

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="main-footer">
        <p>© {new Date().getFullYear()} Kennedy. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;