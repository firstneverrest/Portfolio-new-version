import React, { Fragment, useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Loading from "../layouts/Loading"
import Navbar from "../layouts/Navbar"
import About from "../components/About"
import Header from "../components/Header"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs/Blogs"
import Experience from "../components/Experience"
import Contact from "../components/Contact/Contact"
import Footer from "../layouts/Footer"

import "../styles/main.scss"

export default function Home({ data }) {
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])

  // medium api
  const MediumUrl =
    "https://v1.nocodeapi.com/firstneverrest/medium/yhDtPtDCrvdBEFeE"

  // graphql request data from markdown files in projects section
  const projects = data.allMarkdownRemark.nodes

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1600)
  })

  // fetch medium api
  useEffect(() => {
    fetchArticles()
  }, [])

  // fetch articles from Medium using nocodeapi
  const fetchArticles = async () => {
    try {
      const response = await fetch(MediumUrl)
      const articles = await response.json()
      setArticles(articles)
    } catch (error) {
      // return <Error />;
      console.log(error)
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Chitsanupong Tangvasinkul Portfolio"
        />
        <meta property="og:title" content="Chitsanupong Portfolio Website" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Chitsanupong Tangvasinkul Portfolio Website"
        />
        <meta property="og:image" content="static/profile.jpg" />
        <meta property="og:image:type" content="image/jpg" />
        <title>Chitsanupong Tangvasinkul Portfolio</title>
      </Helmet>
      <Navbar />
      <div className="container">
        <Header />
        <About />
        <Skills />
        <Projects projects={projects} />
        <Blogs articles={articles} />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </Fragment>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: frontmatter___id, order: ASC }) {
      nodes {
        frontmatter {
          id
          projectName
          stack
          img
          url
        }
      }
    }
  }
`
