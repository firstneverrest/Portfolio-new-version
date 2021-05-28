import React from "react"

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__container">
        <h1 className="Navbar__logo">Neverrest</h1>
        <div className="Navbar__link">
          <h3><a className="effect-underline" href="#home">About Me</a></h3>
          <h3><a className="effect-underline" href="#skills">Skills</a></h3>
          <h3><a className="effect-underline" href="#projects">Projects</a></h3>
          <h3><a className="effect-underline" href="#blogs">Blogs</a></h3>
          <h3><a className="effect-underline" href="#contact">Contact</a></h3>
          <h3><a className="effect-underline" href="#activities">Activities</a></h3>
        </div>
      </div>
    </div>
  )
}
