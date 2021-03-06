import React from "react"

const parser = require("xml2json-light")

export default function Blog({ id, article }) {
  // parse xml to json and extract html tag for thumbnail and content
  let xml = article["content:encoded"]

  let searchEndIndex = xml.indexOf("</p>")
  xml = xml.slice(0, searchEndIndex + 4)

  let json = parser.xml2json(xml)
  let thumbnail, content

  thumbnail = json["figure"]["img"]["src"]
  content = json["p"]

  let title = article["title"]

  let link = article["link"]

  let pubDate = article["pubDate"]
  pubDate = pubDate.split(" ")
  pubDate = `${pubDate[1]} ${pubDate[2]}, ${pubDate[3]}`

  let categories = article["categories"]

  // handle when article paragraph is unable to get date
  if (content[0] === undefined) {
    content = `Click to read more about ${title}`
  }

  const openBlog = url => {
    window.open(url)
  }

  return (
    <div
      className="Blogs_blog"
    >
      <img
        className="Blogs__blog-img"
        src={thumbnail}
        alt="blog thumbnail"
        onClick={() => openBlog(link)}
      />
      <div className="Blogs__blog-container ">
        <h4 className="Blogs__blog-title" onClick={() => openBlog(link)}>
          {title}
        </h4>
        <p className="Blogs__blog-date">{pubDate}</p>
        <p className="Blogs__blog-info">{content}</p>
        <p className="Blogs__blog-readMore" onClick={() => openBlog(link)}>
          Read More &#8594;
        </p>
        <p className="Blogs__blog-categories">
          {categories.map((category, index) => {
            return (
              <span key={index} className="subtitle Blogs__blog-category">
                {categories[index]}
              </span>
            )
          })}
        </p>
      </div>
    </div>
  )
}
