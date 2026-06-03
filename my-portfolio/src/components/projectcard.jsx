import React from 'react';

function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noreferrer" className="btn">
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;