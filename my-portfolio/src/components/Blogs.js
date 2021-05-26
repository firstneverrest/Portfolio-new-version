import React from "react"

import Blog from "./Blog"

export default function Blogs({ articles }) {

  return (
    <div className="Blogs">
      <h2 className="Blogs__header">Blogs</h2>
      <div className="Blogs__grid">
        {articles.map((article, index) => {
          return <Blog key={index} id={index} article={article} />
        })}

        {/* <div className="Blogs__blog first-element first-container">
          <img
            className="Blogs__blog-img"
            src="/project_article.jpg"
            alt="blog thumbnail"
          />
          <div className="Blogs__blog-container">
            <h4 className="Blogs__blog-title">Visual Studio Code Tips</h4>
            <p className="Blogs__blog-date">2 May, 2020</p>
            <p className="Blogs__blog-info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              cumque sed veritatis? Voluptas dolorem magnam debitis corporis
              odit tempore! Provident iure ut qui esse iusto temporibus quia
              voluptatibus dicta ab.
            </p>
            <p className="subtitle Blogs__blog-tag">vscode</p>
          </div>
        </div> */}
        {/* <div className="Blogs__blog">
          <h4 className="Blogs__blog-title">Visual Studio Code Tips</h4>
          <p className="Blogs__blog-date">2 May, 2020</p>
          <p className="Blogs__blog-info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            cumque sed veritatis? Voluptas dolorem magnam debitis corporis odit
            tempore! Provident iure ut qui esse iusto temporibus quia
            voluptatibus dicta ab.
          </p>
          <p className="subtitle Blogs__blog-tag">vscode</p>
        </div> */}
      </div>
    </div>
  )
}
