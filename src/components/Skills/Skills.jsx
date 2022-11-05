import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className="skills">
      <div className="s-left">
        <div className="s-head">
          <p className="head1">My</p>
          <p className="head2">SkillSet</p>
        </div>
        <p className="s-body">Lorem ispum is simpley dummy text of printing of printing Lorem
          ispum is simpley dummy text of printing</p>
      </div>
      <div className="s-right">
        <div className="s-bars">
          <div className="bar">
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line html">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>CSS</span>
            </div>
            <div className="progress-line css">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>jQuery</span>
            </div>
            <div className="progress-line jquery">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>Python</span>
            </div>
            <div className="progress-line python">
              <span></span>
            </div>
          </div>
          <div className="bar">
            <div className="info">
              <span>MySQL</span>
            </div>
            <div className="progress-line mysql">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills