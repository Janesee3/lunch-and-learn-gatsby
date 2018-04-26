import React from 'react'
import Link from 'gatsby-link'
import SkillsCard from '../components/SkillsCard/SkillsCard'
import { languages, agileSkills, devops } from '../data/seedData'

const SkillsList = () => (
  <div>
    <Link to="/">← Go back to homepage</Link>
    <h1>Skills</h1>
    <SkillsCard skills={languages} title="languages" />
    <SkillsCard skills={agileSkills} title="agile" />
    <SkillsCard skills={devops} title="devops" />
  </div>
)

export default SkillsList
