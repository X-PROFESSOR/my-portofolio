import React from "react";
import "./Footer.css";
import github from "../../img/githubW.png";
import telegram from "../../img/telegramW.png";
import gmail from "../../img/gmail.png";

const Footer = () => {
  return (
    <div className="footer">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" viewBox="0 142 900 309">
        <path fill="#F5C32C" strokeLinecap="round" d="M0 225l75 12.7c75 12.6 225 38 375 24.1C600 248 750 195 825 168.5l75-26.5v309H0z"></path>
      </svg>
      <div className="f-content">
        <a href="mailTo:nileshmukherjee1855@gmail.com" style={{ textAlign: "Center" }}>
          <img src={gmail} alt="gmail" height={35} width={35} />
          <br></br>
          nileshmukherjee1855@gmail.com
        </a>
        <div className="f-icons">
          <a href="https://github.com/X-PROFESSOR/" target="_blank" rel="noreferrer">
            <img src={github} alt="github" className="f-github" />
          </a>
          <a href="https://t.me/itsprofessorhere" target="_blank" rel="noreferrer">
            <img src={telegram} alt="telegram" className="f-telegram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
