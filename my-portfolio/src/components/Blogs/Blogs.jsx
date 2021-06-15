import React from "react"

import Blog from "./Blog"

export default function Blogs({ articles }) {
  return (
    <React.Fragment>
      <div className="scroll-margin-top">
        <a name="blogs">&nbsp;</a>
      </div>
      <section className="Blogs">
        <h2 className="Blogs__header">Blogs</h2>
        <div className="Blogs__grid">
          {articles.map((article, index) => {
            return <Blog key={index} id={index} article={article} />
          })}
        </div>
      </section>
    </React.Fragment>
  )
}
