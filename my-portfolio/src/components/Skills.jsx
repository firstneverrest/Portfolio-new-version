import React from "react"
import { AiFillHtml5 } from "react-icons/ai"
import {
  DiCss3,
  DiSass,
  DiPython,
  DiRubyRough,
  DiMongodb,
  DiNodejsSmall,
  DiReact,
  DiVim,
} from "react-icons/di"
import { SiJavascript, SiTypescript, SiMysql, SiDocker, SiTailwindcss, SiMaterialUi, SiBootstrap } from "react-icons/si"

export default function Skills() {
  return (
    <React.Fragment>
      <div className="scroll-margin-top">
        <a name="skills">&nbsp;</a>
      </div>
      <section className="Skills">
        <h2 className="Skills__header">Skills</h2>
        <div className="Skills__grid">
          <div className="Skills__skill">
            <AiFillHtml5 className="Skills__skill-logo" />
            <h4>HTML</h4>
          </div>
          <div className="Skills__skill">
            <DiCss3 className="Skills__skill-logo" />
            <h4>CSS</h4>
          </div>
          <div className="Skills__skill">
            <SiJavascript className="Skills__skill-logo" />
            <h4>JavaScript</h4>
          </div>
          <div className="Skills__skill">
            <DiSass className="Skills__skill-logo" />
            <h4>Sass</h4>
          </div>
          <div className="Skills__skill">
            <SiTypescript className="Skills__skill-logo" />
            <h4>TypeScript</h4>
          </div>
          <div className="Skills__skill">
            <DiPython className="Skills__skill-logo" />
            <h4>Python</h4>
          </div>
          <div className="Skills__skill">
            <DiRubyRough className="Skills__skill-logo" />
            <h4>Ruby</h4>
          </div>
          <div className="Skills__skill">
            <DiReact className="Skills__skill-logo" />
            <h4>React</h4>
          </div>
          <div className="Skills__skill">
            <DiNodejsSmall className="Skills__skill-logo" />
            <h4>Node.js</h4>
          </div>
          <div className="Skills__skill">
            <DiMongodb className="Skills__skill-logo" />
            <h4>MongoDB</h4>
          </div>
          <div className="Skills__skill">
            <SiMysql className="Skills__skill-logo" />
            <h4>MySQL</h4>
          </div>
          <div className="Skills__skill">
            <SiDocker className="Skills__skill-logo" />
            <h4>Docker</h4>
          </div>
          <div className="Skills__skill">
            <SiBootstrap className="Skills__skill-logo" />
            <h5>Bootstrap 5</h5>
          </div>
          <div className="Skills__skill">
            <SiMaterialUi className="Skills__skill-logo" />
            <h5>Material UI</h5>
          </div>
          <div className="Skills__skill">
            <SiTailwindcss className="Skills__skill-logo" />
            <h5>Tailwind CSS</h5>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
