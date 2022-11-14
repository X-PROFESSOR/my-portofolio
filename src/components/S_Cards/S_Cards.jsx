import React from "react";
import "./S_Cards.css";
import { useInView } from "react-intersection-observer";

function S_Cards({ header, l1, l2, l3, l4 }) {
  const { ref: myRef, inView } = useInView();

  if (inView === true) {
    var bar = document.querySelector(".s-card")

    bar.style.setProperty("--animateSpan", "showText 0.5s 1s linear forwards");
    bar.style.setProperty("--animatePline", "animate 1s cubic-bezier(1, 0, 0.5, 1) forwards");
    bar.style.setProperty("--animatePlineSpan", "animate 1s 1s cubic-bezier(1, 0, 0.5, 1) forwards");
    bar.style.setProperty("--animatePlineSpanBA", "showText2 0.5s 1.5s linear forwards");
  }

  return (
    <div ref={myRef} className="s-bars">
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
  );
}

export default S_Cards;
