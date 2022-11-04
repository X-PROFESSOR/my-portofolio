import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">NILESH</div>
        <div className="n-right">
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                <a href='#'>Skills</a>
                </li>
                <li>
                <a href='#'>Projects</a>
                </li>
                <li>
                <a href='#'>About</a>
                </li>
                <button>Contact Me</button>
            </ul>
        </div>

    </div>
  )
}

export default Navbar