import React from "react"

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <h1 className="Footer__logo">Neverrest</h1>
        <p className="Footer__copyright subtitle">
          Copyright © 2021 Chitsanupong Tangvasinkul. All rights reserved.
        </p>
        <div className="Footer__social">
          <a href="#" className="Footer__social-ig"></a>
          <a href="#" className="Footer__social-facebook"></a>
          <a href="#" className="Footer__social-github"></a>
          <a href="#" className="Footer__social-linkedin"></a>
          <a href="#" className="Footer__social-medium"></a>
        </div>
      </div>
    </div>
  )
}
