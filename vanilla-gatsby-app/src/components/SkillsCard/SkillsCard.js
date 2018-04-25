import React from 'react'

const SkillsCard = ({ skills }) => (
  <div>
    {skills.map(skill => {
      return (
        <h3>
          {skill.name}: {skill.proficiency}
        </h3>
      )
    })}
  </div>
)

export default SkillsCard
