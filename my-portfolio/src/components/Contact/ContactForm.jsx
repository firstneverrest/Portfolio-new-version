import React, { useState } from "react"

// import { sendEmail } from './emailHandler'

export default function ContactForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const fullNameHandler = event => {
    setFullName(event.target.value)
  }

  const emailHandler = event => {
    setEmail(event.target.value)
  }

  const messageHandler = event => {
    setMessage(event.target.value)
  }

  const sendEmailSubmit = event => {
    event.preventDefault()
    // sendEmail()
  }

  return (
    <React.Fragment>
      <form
        className="Contact__form"
        onSubmit={sendEmail()}
        method="post"
      >
        <h4 className="Contact__form-header">Contact me by E-mail</h4>
        <div className="Contact__form-container">
          <div className="Contact__form-fullName">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={fullNameHandler}
              required
            />
          </div>
          <div className="Contact__form-email">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={emailHandler}
              required
            />
          </div>
        </div>

        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          id="message"
          value={message}
          onChange={messageHandler}
          required
        />
        <button className="Contact__form-button">Send Message</button>
      </form>
    </React.Fragment>
  )
}
