import React from 'react'
import './About.css'
import me from '../../img/me.png'

const About = () => {
  return (
    <div className="about" id='About'>
      <div className="a-head">
        About Me
      </div>
      <div className="a-body">
        <div className="a-bodyPic">
          <section className='picDiv'>
            <img src={me} alt="" style={{position: "absolute", width: "14rem", top: "2%" }} />
          </section>
        </div>
        <div className="a-bodyInfo">
          <p>Hi, I'm Nilesh Mukherjee, a self-taught passionate developer from India, currently pursuing Master of Computer Science. I like to build stuffs in my free time. I mainly use Javascript to code, but I like Python and C too. <br></br><br></br>I love <b>Open-Source</b> Projects. I do contribute to open source development often.</p>
        </div>
      </div>
    </div>
  )
}

export default About