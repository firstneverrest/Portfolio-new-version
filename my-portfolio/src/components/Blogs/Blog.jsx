import React from "react"

const parser = require("xml2json-light")

export default function Blog({ id, article }) {
  // parse xml to json and extract html tag for thumbnail and content
  let xml = article["content_encoded"]
  const searchEndIndex = xml.indexOf("</p>")
  xml = xml.slice(0, searchEndIndex + 4)

  const json = parser.xml2json(xml)
  const thumbnail = json["figure"]["img"]["src"]

  const title = article["title"]
  const link = article["link"]
  const categories = article["category"]

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  let pubDate = new Date(parseInt(article["published"]))
  const pubMonth = monthNames[pubDate.getMonth()]
  pubDate = pubDate.toLocaleDateString("en-US").split("/")
  pubDate = `${pubDate[0]} ${pubMonth} ${pubDate[2]}`

  // handle when article paragraph is unable to get date
  let content = json["p"]
  if (content[0] === undefined) {
    content = `Click to read more about ${title}`
  }

  const openBlog = url => {
    window.open(url)
  }

  return (
    <div className="Blogs_blog">
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
