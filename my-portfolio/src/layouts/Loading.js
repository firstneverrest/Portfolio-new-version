import React, { useState, useEffect } from "react"

const Loading = () => {
  const [loadingWidth, setLoadingWidth] = useState(0)

  useEffect(() => {
    setLoadingTime()
  }, [])

  // set loading timer
  const setLoadingTime = () => {
    const loading = setInterval(() => {
      setLoadingWidth(prevState => {
        return prevState + 1
      })
    }, 15)

    setTimeout(() => {
      clearInterval(loading)
    }, 2000)
  }

  const widthStyle = {
    "--width": `${loadingWidth}%`,
  }

  // handle percent text on screen
  let loadingPercent = `${loadingWidth}%`

  if (loadingWidth >= 100) {
    loadingPercent = "100%"
  }

  return (
    <div className="Loading__container">
      <div className="Loading__center">
        <h2 className="Loading__name">Chitsanupong Tangvasinkul</h2>
        <div className="Loading__progress-bar" style={widthStyle}></div>
        <p className="Loading__percent">{loadingPercent}</p>
      </div>
    </div>
  )
}

export default Loading
