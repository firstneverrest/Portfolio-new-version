import React from "react"

export default function Projects({ projects }) {
  const openProject = url => {
    window.open(url)
  }

  return (
    <div className="Projects">
      <h2 className="Projects__header">Projects</h2>
      <div className="Projects__grid">
        {projects.map(project => {
          return (
            <div
              className="Projects__project"
              onClick={() => openProject(project.frontmatter.url)}
              key={project.frontmatter.id}
            >
              <div className="backdrop"></div>
              <img
                src={project.frontmatter.img}
                alt="my project"
                className="Projects__project-img"
              />
              <div className="Projects__project-description">
                <h4>{project.frontmatter.projectName}</h4>
                <p>{project.frontmatter.stack}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
