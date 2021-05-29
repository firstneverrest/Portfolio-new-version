import React, { Fragment, useState, useEffect } from "react"
import { graphql } from "gatsby"


// import Loading from "../layouts/Loading"
import Navbar from "../layouts/Navbar"
import About from "../components/About"
import Header from "../components/Header"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs/Blogs"
import Activities from '../components/Activities'
import Contact from "../components/Contact/Contact"
import Footer from "../layouts/Footer"

import "../styles/main.scss"

export default function Home({ data }) {
  // const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState([])

  // medium api
  const MediumUrl = "https://v1.nocodeapi.com/neverrest/medium/tbUXiyQhVDDssczC"

  // graphql request data from markdown files in projects section
  const projects = data.allMarkdownRemark.nodes

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 2000)
  // })

  // if (isLoading) {
  //   return <Loading />
  // }

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

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Header />
        <About />
        <Skills />
        <Projects projects={projects} />
        <Blogs articles={articles}/>
        <Activities />
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
