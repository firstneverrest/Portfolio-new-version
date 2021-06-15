import React from "react"
import { IoIosArrowUp } from "react-icons/io"

export default function ButtonToTop() {
  return (
    <div className="Button-to-top">
      <a href="#home">
          <IoIosArrowUp className="Button-to-top__icon" />
          <IoIosArrowUp className="Button-to-top__icon" />
        <p className="Button-to-top__label">Scroll to Top</p>
      </a>
    </div>
  )
}
