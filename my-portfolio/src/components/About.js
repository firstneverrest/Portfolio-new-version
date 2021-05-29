import React from "react"

export default function About() {
  return (
    <div className="About">
      <h2 className="About__header">About Me</h2>
      <div className="About__container">
        <div className="About__group">
          <ul className="About__topic">
            <li>Name:</li>
            <li>Date of birth:</li>
            <li>Address:</li>
            <li>Phone:</li>
            <li>E-mail:</li>
          </ul>
          <ul className="About__info">
            <li>Chitsanupong Tangvasinkul</li>
            <li>July 9, 2000</li>
            <li>Samut Prakan, Thailand</li>
            <li>085-939-2573</li>
            <li>c.tangvasinkul@gmail.com</li>
          </ul>
        </div>
        <div className="About__line"></div>
        <p className="About__description">
          After my web development skills are good enough, I have a plan to step
          up my game. First, I would like to be a front-end developer to
          understand how can I create a good UX/UI website. Next, I would like
          to be a back-end developer to understand how to manage API, manipulate
          database and collaborate with front-end developer. Finally, I would
          like to be a full-stack developer which make me have all skills about
          web development from beginning to end.
        </p>
      </div>
    </div>
  )
}
