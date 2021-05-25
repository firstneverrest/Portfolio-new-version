import React from "react"

export default function Projects() {
  const openProject = (url) => {
    window.open(url)
  }

  return (
    <div className="Projects">
      <h2 className="Projects__header">Projects</h2>
      <div className="Projects__grid">
        <div className="Projects__project" onClick={() => openProject("https://github.com/firstneverrest")}>
          <div className="backdrop"></div>
          <img
            src="/project_article.jpg"
            alt="article project"
            className="Projects__project-img"
          />
          <div className="Projects__project-description">
            <h4>Hotel Web Application</h4>
            <p>Stack: React, Material UI</p>
          </div>
        </div>
        <div className="Projects__project">
          <div className="backdrop"></div>
          <h4>Hotel Web Application</h4>
          <p>Stack: React, Material UI</p>
        </div>
        <div className="Projects__project">
          <div className="backdrop"></div>
          <h4>Hotel Web Application</h4>
          <p>Stack: React, Material UI</p>
        </div>
      </div>
    </div>
  )
}
