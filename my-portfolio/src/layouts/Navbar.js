import React from "react"

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__container">
        <h1 className="Navbar__logo">Neverrest</h1>
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="Navbar__link">
          <h4>
            <a className="effect-underline" href="#home">
              About Me
            </a>
          </h4>
          <h4>
            <a className="effect-underline" href="#skills">
              Skills
            </a>
          </h4>
          <h4>
            <a className="effect-underline" href="#projects">
              Projects
            </a>
          </h4>
          <h4>
            <a className="effect-underline" href="#blogs">
              Blogs
            </a>
          </h4>
          <h4>
            <a className="effect-underline" href="#activities">
              Activities
            </a>
          </h4>
          <h4>
            <a className="effect-underline" href="#contact">
              Contact
            </a>
          </h4>
        </div>
      </div>
    </div>
  )
}
