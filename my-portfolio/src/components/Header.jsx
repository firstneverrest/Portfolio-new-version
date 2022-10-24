import React from "react"
import { StaticImage } from "gatsby-plugin-image"

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
          <h4 className="Header__description-position">
            Software Engineer Full Stack
          </h4>
          <p className="Header__description-history">
            Meticulous Software Engineer with one year of frontend and backend
            experience and passion for web development. Implemented complex
            React application in collaborative environments to achieve
            high-quality products. Aspiring to combine strong leadership with
            web development skill as a Software Engineer.
          </p>
        </div>
      </header>
    </React.Fragment>
  )
}
