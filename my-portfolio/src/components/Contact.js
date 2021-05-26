import React from "react"

import { MdEmail, MdLocationOn } from "react-icons/md"
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumSquare,
} from "react-icons/ai"
import { BiPhoneCall } from "react-icons/bi"

export default function Contact() {
  return (
    <div className="Contact">
      <h2 className="Contact__header">Contact</h2>
      <div className="Contact__container">
        <div className="Contact__social">
          <div className="Contact__social-container">
            <MdEmail className="Contact__icon" />
            <p>c.tangvasinkul@gmail.com</p>
          </div>
          <div className="Contact__social-container">
            <BiPhoneCall className="Contact__icon" />
            <p>085-939-2573</p>
          </div>
          <div className="Contact__social-container">
            <MdLocationOn className="Contact__icon" />
            <p>Samut Prakan, Thailand</p>
          </div>
          <div className="Contact__social-container">
            <AiFillFacebook className="Contact__icon" />
            <p>Chitsanupong Tangvasinkul</p>
          </div>
          <div className="Contact__social-container">
            <AiFillInstagram className="Contact__icon" />
            <p>first.neverrest</p>
          </div>
          <div className="Contact__social-container">
            <AiFillLinkedin className="Contact__icon" />
            <p>Chitsanupong Tangvasinkul</p>
          </div>
          <div className="Contact__social-container">
            <AiFillMediumSquare className="Contact__icon" />
            <p>Neverrest</p>
          </div>
          <div className="Contact__social-container">
            <AiFillGithub className="Contact__icon" />
            <p>firstneverrest</p>
          </div>
        </div>

        <form className="Contact__form">
          <h4 className="Contact__form-header">Contact me by email</h4>
          <div className="Contact__form-container">
            <div className="Contact__form-fullName">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" />
            </div>
            <div className="Contact__form-email">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" />
            </div>
          </div>

          <label htmlFor="message">Message</label>
          <textarea type="text" id="message" />
          <button className="Contact__form-button">Send Message</button>
        </form>
      </div>
    </div>
  )
}
