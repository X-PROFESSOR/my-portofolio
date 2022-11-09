import React from 'react'
import './Skills.css'
import Card from '../S-Cards/S-Cards'

const Skills = () => {
  return (
    <div className="skills" id='Skills'>
      <div className="s-info">
        <div className="s-head">
          <p>My</p>
          <p style={{color: "#F5C32C", marginTop: "0.5rem"}}>SkillSet</p>
        </div>
        <p className="s-body">Lorem ispum is simpley dummy text of printing of printing<br></br>Lorem
          ispum is simpley dummy text of printing</p>
      </div>
      <div className="s-card">
        <div className="card1">
          <Card
            header={"Frontend Developer"}
            l1={"HTML"}
            l2={"CSS"}
            l3={"Javascript"}
            l4={"React"}
          />
        </div>
        <div className="card2">
          <Card
            header={"Backend Developer"}
            l1={"PHP"}
            l2={"NodeJS"}
            l3={"Firebase"}
            l4={"Python"}
          />
        </div>
        <div className="card3">
          <Card
            header={"Designer"}
            l1={"Figma"}
            l2={"Sketch"}
            l3={"Blender"}
            l4={"GIMP"}
          />
        </div>
      </div>
    </div>
  )
}

export default Skills