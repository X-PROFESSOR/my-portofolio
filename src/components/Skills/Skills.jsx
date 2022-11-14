import React from "react";
import "./Skills.css";
import Cards from "../S_Cards/S_Cards";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const Skills = () => {
  return (
    <div className="skills" id="Skills">
      <div className="s-info">
        <div className="s-head">
          <p>My <span style={{ color: "#F5C32C", marginTop: "0.5rem" }}>SkillSet</span> </p>
        </div>
        <p className="s-body">Lorem ispum is simpley dummy text of printing of printing Lorem ispum is simpley dummy text of printing</p>
      </div>
      <div className="s-card">
        <div className="card1">
          <Cards header={"Frontend Developer"} l1={"HTML"} l2={"CSS"} l3={"Javascript"} l4={"React"} />
        </div>
        <div className="card2">
          <Cards header={"Backend Developer"} l1={"PHP"} l2={"NodeJS"} l3={"Firebase"} l4={"Python"} />
        </div>
        <div className="card3">
          <Cards header={"Designer"} l1={"Figma"} l2={"Sketch"} l3={"Blender"} l4={"GIMP"} />
        </div>
      </div>
      <ParallaxProvider>
        <Parallax speed={-30}>
          <div className="s-innerWordCloud">
            <p>HTML5</p>
            <p>CSS3</p>
            <p>MongoDB</p>
            <p>Figma</p>
            <p>GIMP</p>
            <p>NodeJS</p>
            <p>Blender</p>
            <p>MySQL</p>
            <p>php</p>
          </div>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default Skills;
