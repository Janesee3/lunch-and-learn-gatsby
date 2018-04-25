import React from 'react'

const ProjectCard = ({ project }) => (
  <div>
    <h2>{project.title}</h2>
    <p>{project.description}</p>
    <img src={project.imageUrl} alt={project.title} id="project-card-image" />
  </div>
)

export default ProjectCard
