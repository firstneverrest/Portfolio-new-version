import React from "react"

export default function Activities() {
  return (
    <React.Fragment>
      <div className="scroll-margin-top">
        <a name="activities">&nbsp;</a>
      </div>
      <section className="Activities">
        <h2 className="Activities__header">Activities</h2>
        <ul className="Activities__container">
          <li className="Activities__card">
            <h4 className="Activities__title">
              Deputy Secretary-General, Student Council of Chulalongkorn
              University
            </h4>
            <p className="Activities__date">May 2019 - May 2020</p>
            <p className="Activities__info">
              After I had worked in student council for a while, the secretary
              of the student council saw my potential and give me an opportunity
              to become a deputy secretary-general. My responsibilities in this
              role are typing and preparing reports, preparing meeting for
              student council and, managing letter and document.
            </p>
          </li>
          <li className="Activities__card">
            <h4 className="Activities__title">
              Secretary of the Special committee of Human Resources, Student
              Council of Chulalongkorn University
            </h4>
            <p className="Activities__date">May 2019 - May 2020</p>
            <p className="Activities__info">
              I interested in human resources field, Therefore I decided to
              attend human resources department in student council. My roles are
              recruiting candidates, record and maintain all representative
              member data and, creating training event for improving our member
              skills.
            </p>
          </li>
          <li className="Activities__card">
            <h4 className="Activities__title">
              Secretary of the Committee of Sports, Student Council of
              Chulalongkorn University
            </h4>
            <p className="Activities__date">May 2019 - May 2020</p>
            <p className="Activities__info">
              In addition to human resources department, I also interested in 
              sports such as shooting and petanque. So, I attended sports 
              committee as a secretary. My roles are similar to deputy secretary-general
              but more about sports.
            </p>
          </li>
          <li className="Activities__card">
            <h4 className="Activities__title">
              President, Shooting Club in faculty of Science
            </h4>
            <p className="Activities__date">August 2019 - August 2020</p>
            <p className="Activities__info">
              Because I attended shooting club in my first year and became a competitor 
              in "Freshy Udom" competition (university shooting competition), I decided 
              to become the president for my faculty to improve shooting club.  
            </p>
          </li>
        </ul>
      </section>
    </React.Fragment>
  )
}
