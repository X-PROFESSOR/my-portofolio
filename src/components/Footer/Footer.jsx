import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import github from '../../img/githubW.png'
import telegram from '../../img/telegramW.png'
import gmail from '../../img/gmail.png'

const Footer = () => {
    return (
        <div className="footer">
            <img src={wave} alt="wave" style={{ width: "100%" }} />
            <div className="f-content">
                {/* <p style={{ fontSize: 20 }}>

                </p> */}
                <a href='mailTo:nileshmukherjee1855@gmail.com' style={{textAlign:"Center"}}>
                    <img src={gmail} alt="gmail" height={35} width={35} /><br></br>
                    Nileshmukherjee1855@gmail.com
                </a>
                <div className="f-icons">
                    <a href="https://github.com/X-PROFESSOR/" target="_blank" rel="noreferrer">
                        <img src={github} alt="github" height={40} width={40} />
                    </a>
                    <a href="https://t.me/itsprofessorhere" target="_blank" rel="noreferrer">
                        <img src={telegram} alt="telegram" height={70} width={70} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer