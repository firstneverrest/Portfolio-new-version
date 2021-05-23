import React, { Fragment, useState, useEffect } from "react"

// import Loading from "../layouts/Header"
import Navbar from "../layouts/Navbar"
import Header from '../components/Header'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'
import Footer from '../layouts/Footer'
import About from '../components/About'

import "../styles/main.scss"

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 2000)
  // })

  // if (isLoading) {
  //   return <Loading />
  // }

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    </Fragment>
  )
}
