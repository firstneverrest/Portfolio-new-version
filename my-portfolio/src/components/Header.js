import React from "react"

export default function Header() {
  return (
    <div className="Header">
      <img className="Header__image" src="/profile.jpg" alt="my profile" />
      <div className="Header__description">
        <h1 className="Header__description-name">Chitsanupong Tangvasinkul</h1>
        <h4 className="Header__description-position">Front-end Developer</h4>
        <p className="Header__description-history">
          Hi There, I'm a junior student majoring in Computer Science at
          Chulalongkorn University in search of a front-end developer
          internship. My journey began in December 2020, when I was interested
          in web development. After that, I started learning about website from
          scratch. From basic HTML, CSS and JavaScript to React and other
          libraries and framework. I'm a fast learner which can understand
          fundamental of web development in only a few months.
        </p>
      </div>
    </div>
  )
}
