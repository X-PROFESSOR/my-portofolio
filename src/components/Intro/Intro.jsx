import React from 'react'
import './Intro.css'
import shape from '../../img/shape.png'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import telegram from '../../img/telegram.png'

const Intro = () => {
  return (
    <div className="intro" id='Intro'>
      <div className="i-left">
        <div className="i-name">
          <p style={{fontSize: "1.25rem"}}>Hello, I'm</p>
          <p className="name2">NILESH MUKHERJEE</p>
          <p className="i-info">Developer From India</p>
          <button className='i-btn'>Download CV</button>
        </div>
        <div className="i-connect">
          <a href='https://github.com/X-PROFESSOR/' target="_blank" rel="noreferrer">
            <img src={github} alt="github" height={40} width={40} />
          </a>
          <a href='https://www.linkedin.com/in/nilesh-mukherjee-182a051bb/' target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin" height={60} width={60} />
          </a>
          <a href='https://t.me/itsprofessorhere' target="_blank" rel="noreferrer">
            <img src={telegram} alt="telegram" height={70} width={70} />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={shape} alt="shape" className='i-shape' />
        <div className='i-box'>
          <div>
            <pre>
              1&nbsp;&nbsp;class <b>Person</b> {'{'}
            </pre>
            <pre>
              2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() {'{'}
            </pre>
            <pre>
              3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = ""<b>Nilesh Mukherjee</b>";
            </pre>
            <pre>
              4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = ["<b>DEV</b>", "<b>DESIGN</b>"];
            </pre>
            <pre>
              5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age = new Date().getFullYear() - 2001;
            </pre>
            <pre>
              6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            </pre>
            <pre>
              7&nbsp;&nbsp;{'}'}
            </pre>
          </div>
        </div>
        {/* right goes here */}
      </div>
    </div>
  )
}

export default Intro