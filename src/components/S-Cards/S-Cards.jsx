import React from 'react'
import './S-Cards.css'

const Cards = ({header, l1, l2, l3, l4}) => {
    return (
        <div className="s-bars">
            <p className="card-head">{header}</p>
            <div className="bar">
                <div className="info">
                    <span>{l1}</span>
                </div>
                <div className={`progress-line ${l1}`}>
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>{l2}</span>
                </div>
                <div className={`progress-line ${l2}`}>
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>{l3}</span>
                </div>
                <div className={`progress-line ${l3}`}>
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>{l4}</span>
                </div>
                <div className={`progress-line ${l4}`}>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Cards