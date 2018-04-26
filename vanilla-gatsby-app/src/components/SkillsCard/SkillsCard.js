import React from 'react'
import GridsScale from '../GridsScale/GridsScale'

import './SkillsCard.css'

const SkillsCard = ({ skills, title }) => (
  <div className="skills-card-container">
    <h3>{title}</h3>
    {skills.map((skill, i) => {
      return (
        <div key={i}>
          {skill.name}: <GridsScale level={skill.proficiency} />
        </div>
      )
    })}
  </div>
)

export default SkillsCard
