import React from 'react'
import Link from 'gatsby-link'
import profilePicture from '../images/profile-picture.jpg'

import './index.css'

const IndexPage = () => (
  <div>
    <div id="profile-image-container">
      <img src={profilePicture} id="profile-image" />
    </div>
    <h1>Hello world</h1>
    <p>I am David.</p>
    <p>
      I’m a full-stack web developer. I provide tools to help businesses and
      companies turn concepts into reality. In my free time, you will find me
      eating.
    </p>
    <Link id="link" to="/projects/">
      Projects
    </Link>
    <Link id="link" to="/skills/">
      Skills
    </Link>
  </div>
)

export default IndexPage
