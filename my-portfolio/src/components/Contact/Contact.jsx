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
import ButtonToTop from '../ButtonToTop'

// import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <React.Fragment>
      <div className="scroll-margin-top">
        <a name="contact">&nbsp;</a>
      </div>
      <section className="Contact">
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
        </div>
        <ButtonToTop />
      </section>
    </React.Fragment>
  )
}
