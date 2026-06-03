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
      title: "Dummy AI Tool",
      description: "A simple AI tool that demonstrates basic machine learning concepts.",
      tags: ["React", "JavaScript", "CSS", "API"],
      link: "https://github.com/Kane254/Kanes-GP.git"
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