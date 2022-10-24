import React, { useState } from "react"

export default function Navbar() {
  const [isChecked, setIsChecked] = useState(false)

  const linkClickHandler = () => {
    setIsChecked(!isChecked)
  }

  let navStyle = {}
  let buttonStyle = {}

  if (!isChecked) {
    navStyle = {
      "--checkbox-width": "0",
      "--checkbox-right": "-30rem",
    }
    buttonStyle = {
      "--button-background": "black",
      "--button-top-before": "-0.8rem",
      "--button-top-after": "0.8rem",
      "--button-rotate-before": "0",
      "--button-rotate-after": "0",
    }
  }

  if (isChecked) {
    buttonStyle = {
      "--button-background": "transparent",
      "--button-top-before": "0rem",
      "--button-top-after": "-0rem",
      "--button-rotate-before": "135deg",
      "--button-rotate-after": "-135deg",
    }
    navStyle = {
      "--checkbox-width": "100vw",
      "--checkbox-right": "0.5rem",
    }
  }

  return (
    <nav className="Navbar">
      <div className="Navbar__container">
        <a className="Navbar__logo" href="#home" onClick={linkClickHandler}>
          Neverrest
        </a>
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
          onChange={linkClickHandler}
          defaultChecked={isChecked}
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon" style={buttonStyle}>
            &nbsp;
          </span>
        </label>

        <div className="Navbar__link" style={navStyle}>
          <h4>
            <a
              className="effect-underline"
              href="#home"
              onClick={linkClickHandler}
            >
              About Me
            </a>
          </h4>
          <h4>
            <a
              className="effect-underline"
              href="#skills"
              onClick={linkClickHandler}
            >
              Skills
            </a>
          </h4>
          <h4>
            <a
              className="effect-underline"
              href="#projects"
              onClick={linkClickHandler}
            >
              Projects
            </a>
          </h4>
          <h4>
            <a
              className="effect-underline"
              href="#blogs"
              onClick={linkClickHandler}
            >
              Blogs
            </a>
          </h4>
          <h4>
            <a
              className="effect-underline"
              href="#experience"
              onClick={linkClickHandler}
            >
              Experience
            </a>
          </h4>
          <h4>
            <a
              className="effect-underline"
              href="#contact"
              onClick={linkClickHandler}
            >
              Contact
            </a>
          </h4>
        </div>
      </div>
    </nav>
  )
}
