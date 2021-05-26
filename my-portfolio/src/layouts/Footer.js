import React from "react"

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
} from "react-icons/ai"

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <h1 className="Footer__logo">Neverrest</h1>
        <p className="Footer__copyright subtitle">
          Copyright © 2021 Chitsanupong Tangvasinkul. All rights reserved.
        </p>
        <div className="Footer__social">
          <a href="https://www.facebook.com/firstnasa/" target="_blank" className="Footer__social-facebook">
            <AiFillFacebook />
          </a>
          <a href="https://www.instagram.com/first.neverrest/" target="_blank" className="Footer__social-ig">
            <AiFillInstagram />
          </a>
          <a href="https://github.com/firstneverrest" target="_blank" className="Footer__social-github">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/chitsanupong-tangvasinkul-934648202/" target="_blank" className="Footer__social-linkedin">
            <AiFillLinkedin />
          </a>
          <a href="https://neverrest.medium.com/" target="_blank" className="Footer__social-medium">
            <AiFillMediumSquare />
          </a>
        </div>
      </div>
    </div>
  )
}
