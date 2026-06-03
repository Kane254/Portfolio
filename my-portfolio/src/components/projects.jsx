import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  const myProjects = [
    {
      title: "Taxi Booking App",
      description: "A full-stack app built with HTML, CSS, and Python that allows users to book taxis online.",
      tags: ["Django", "Python", "HTML", "CSS"],
      link: "https://github.com/Kane254/Taxi-Project.git"
    },
    {
      title: "Weather Dashboard",
      description: "Fetches live weather data using a third-party API.",
      tags: ["React", "REST API", "CSS"],
      link: "https://github.com/yourusername/weather"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Creative Work</h2>
      <div className="projects-grid">
        {myProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;