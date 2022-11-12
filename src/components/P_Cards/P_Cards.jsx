import React from 'react'
import './P_Cards.css'

const P_Cards = ({ p_name, p_details, p_link }) => {
  return (
    <section className="p-cards">
      <p className="cardName">{p_name}</p>
      <p className="cardDetails">{p_details}</p>
      <a href={p_link} target='_blank' rel="noreferrer">
        <button className="viewProject">View Project</button>
      </a>
    </section>
  )
}

export default P_Cards