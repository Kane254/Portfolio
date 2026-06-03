// src/components/About.jsx
import React from 'react';

function About() {
  const skillCategories = [
    { title: "Frontend", skills: ["React", "JavaScript", "HTML", "Tailwind CSS"] },
    { title: "Backend & Tools", skills: ["Node.js", "Express", "Git & GitHub", "REST APIs"] },
    { title: "Design/Other", skills: ["Figma", "UI/UX Fundamentals", "Agile/Scrum"] }
  ];

  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I am a self-taught developer with a passion for bridging the gap between design and scalable engineering. 
            My journey started with building custom web tools, which quickly evolved into an obsession with creating slick user interfaces.
          </p>
          <p>
            When I'm not coding, you can find me analyzing open-source codebases, upgrading my mechanical keyboard, or drinking far too much espresso.
          </p>
        </div>
        
        <div className="skills-container">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-card">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;