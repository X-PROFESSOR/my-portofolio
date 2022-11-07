import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="navbar" id='Navbar'>
      <div className="n-left">PORTFOLIO</div>
      <div className="n-right">
        <ul>
          <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
            <li>Home</li>
          </Link>
          <Link spy={true} to='Skills' smooth={true} activeClass="activeClass">
            <li>Skills</li>
          </Link>
          <Link spy={true} to='Projects' smooth={true} activeClass="activeClass">
            <li>Projects</li>
          </Link>
          <Link spy={true} to='About' smooth={true} activeClass="activeClass">
            <li>About</li>
          </Link>
        </ul>
        <button>Contact Me</button>
      </div>

    </div>
  )
}

export default Navbar