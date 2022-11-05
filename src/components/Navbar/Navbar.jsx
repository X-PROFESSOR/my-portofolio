import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="n-left">PORTFOLIO</div>
      <div className="n-right">
        <ul>
          <li>
            <a href='/#'>Home</a>
          </li>
          <li>
            <a href='/#'>Skills</a>
          </li>
          <li>
            <a href='/#'>Projects</a>
          </li>
          <li>
            <a href='/#'>About</a>
          </li>
        </ul>
        <button>Contact Me</button>
      </div>

    </div>
  )
}

export default Navbar