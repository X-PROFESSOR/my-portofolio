import React from 'react'
import './Interests.css'
import game from '../../img/game.png'
import js from '../../img/js.png'
import code from '../../img/code.png'

const Interests = () => {
    return (
        <div className="interests">
            <div className="in-head">
                <p>Things <span style={{color: "var(--yellow)"}}>I</span> Love</p>
            </div>
            <div className="in-cards">
                <div className="in-card">
                    <section className="card-img">
                        <img src={game} alt="" height={30} />
                    </section>
                    <p>Games</p>
                    <p>I love to play games, either that is PVP of Storymode</p>
                </div>
                <div className="in-card">
                    <section className="card-img">
                        <img src={js} alt="" height={35} />
                    </section>
                    <p>Javascript</p>
                    <p>I extremely love to code in Javascript, it's fun</p>
                </div>
                <div className="in-card">
                    <section className="card-img">
                        <img src={code} alt="" height={50} />
                    </section>
                    <p>Coding</p>
                    <p>I love to code in differnt languages in free time</p>
                </div>
            </div>
        </div>
    )
}

export default Interests