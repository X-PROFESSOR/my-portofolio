import React from 'react'
import './Intro.css'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import telegram from '../../img/telegram.png'

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <p className="name1">Hi, I'm</p>
          <p className="name2">Nilesh Mukherjee</p>
          <p className="i-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste reprehenderit eum iusto, expedita mollitia minima possimus aliquam nihil qui, quis sunt facere corrupti fugiat tempora consequatur rerum odit error.</p>
          <button className='i-btn'>Download CV</button>
        </div>
        <div className="i-connect">
          <a href='https://github.com/X-PROFESSOR/' target="_blank" rel="noreferrer">
            <img src={github} alt="" height={40} width={40} />
          </a>
          <a href='https://www.linkedin.com/in/nilesh-mukherjee-182a051bb/' target="_blank" rel="noreferrer">
            <img src={linkedin} alt="" height={60} width={60} />
          </a>
          <a href='https://t.me/itsprofessorhere' target="_blank" rel="noreferrer">
            <img src={telegram} alt="" height={70} width={70} />
          </a>
        </div>
      </div>
      <div className="i-right">
        its right
      </div>
    </div>
  )
}

export default Intro