import React from 'react'
import Link from 'gatsby-link'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { projects } from '../data/seedData'

const ProjectsList = () => (
  <div>
    <Link to="/">← Go back to homepage</Link>
    <h1>Projects</h1>
    {projects.map((project, i) => <ProjectCard key={i} project={project} />)}
  </div>
)

export default ProjectsList
