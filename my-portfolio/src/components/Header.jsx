import React from "react"
import { StaticImage } from 'gatsby-plugin-image'

export default function Header() {

  return (
    <React.Fragment>
      <div className="scroll-margin-top">
        <a name="home">&nbsp;</a>
      </div>
      <header className="Header">
        <StaticImage
          src="../../static/profile.jpg"
          className="Header__image"
          alt="My profile in Chula student uniform"
          placeholder="none"
        />
        <div className="Header__description">
          <h1 className="Header__description-name">
            Chitsanupong Tangvasinkul
          </h1>
          <h4 className="Header__description-position">Front-end Developer</h4>
          <p className="Header__description-history">
            Hi There, I'm a junior student majoring in Computer Science at
            Chulalongkorn University in search of a front-end developer
            internship. My journey began in December 2020, when I was interested
            in web development. After that, I started learning about website
            from scratch. From basic HTML, CSS and JavaScript to React and other
            libraries and framework. I'm a fast learner which can understand
            fundamental of web development in only a few months.
          </p>
        </div>
      </header>
    </React.Fragment>
  )
}

