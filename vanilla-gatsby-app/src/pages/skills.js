import React from 'react'
import Link from 'gatsby-link'
import SkillsCard from '../components/SkillsCard/SkillsCard'
import { languages, agileSkills } from '../data/seedData'

console.log(languages)
const SkillsList = () => (
  <div>
    <Link to="/">← Go back to homepage</Link>
    <h1>Skills</h1>
    <SkillsCard skills={languages} />
    <SkillsCard skills={agileSkills} />
  </div>
)

export default SkillsList
