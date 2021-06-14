import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

export default function Notfound() {
  return (
    <div className="NotFound">
      <h1 className="NotFound__number">404</h1>
      <h2 className="NotFound__text">Page not found</h2>
      <p className="NotFound__description">
        Sorry, we couldn't find what you were looking for.
      </p>
      <Link to="/" className="NotFound__homepage">
        Return to the homepage
      </Link>
    </div>
  )
}
