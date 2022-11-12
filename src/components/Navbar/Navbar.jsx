import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="navbar" id='Navbar'>
      <div className="n-left">PORTFOLIO</div>
      <div className="n-right">
        <ul>
          <Link spy={true} to='Intro' smooth={true} activeClass="activeClass">
            <li>Home</li>
          </Link>
          <Link spy={true} to='About' smooth={true}>
            <li>About</li>
          </Link>
          <Link spy={true} to='Skills' smooth={true}>
            <li>Skills</li>
          </Link>
          <Link spy={true} to='Projects' smooth={true}>
            <li>Projects</li>
          </Link>
        </ul>
        <Link spy={true} to='Contact' smooth={true}>
          <button>Contact Me</button>
        </Link>
      </div>

    </div>
  )
}

export default Navbar