import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

function S_Cards({ header, l1, w1, l2, w2, l3, w3, l4, w4 }) {
  const { ref: myRef, inView } = useInView();

  if (inView === true) {
    var bar = document.querySelector(".s-card");
    bar.style.setProperty("--animateSpan", "showText 0.5s 1s linear forwards");
    bar.style.setProperty("--animatePline", "animate 1s cubic-bezier(1, 0, 0.5, 1) forwards");
    bar.style.setProperty("--animatePlineSpan", "animate 1s 1s cubic-bezier(1, 0, 0.5, 1) forwards");
    bar.style.setProperty("--animatePlineSpanBA", "showText2 0.5s 1.5s linear forwards");
  }

  return (
    <SBars ref={myRef}>
      <CardHead>{header}</CardHead>
      <Bar>
        <Info>
          <BarSpan>{l1}</BarSpan>
        </Info>
        <ProgressLine>
          <ProgressSpan style={{ width: w1 }}>
            <SpanSection>{w1}</SpanSection>
          </ProgressSpan>
        </ProgressLine>
      </Bar>
      <Bar>
        <Info>
          <BarSpan>{l2}</BarSpan>
        </Info>
        <ProgressLine>
          <ProgressSpan style={{ width: w2 }}>
            <SpanSection>{w2}</SpanSection>
          </ProgressSpan>
        </ProgressLine>
      </Bar>
      <Bar>
        <Info>
          <BarSpan>{l3}</BarSpan>
        </Info>
        <ProgressLine>
          <ProgressSpan style={{ width: w3 }}>
            <SpanSection>{w3}</SpanSection>
          </ProgressSpan>
        </ProgressLine>
      </Bar>
      <Bar>
        <Info>
          <BarSpan>{l4}</BarSpan>
        </Info>
        <ProgressLine>
          <ProgressSpan style={{ width: w4 }}>
            <SpanSection>{w4}</SpanSection>
          </ProgressSpan>
        </ProgressLine>
      </Bar>
    </SBars>
  );
}

const SBars = styled.div`
  padding: 25px 30px;
  width: 17rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  @media (max-width: 481px) {
    width: 85%;
  }
  @keyframes animate {
    100% {
      transform: scaleX(1);
    }
  }

  @keyframes showText {
    100% {
      opacity: 1;
    }
  }

  @keyframes showText2 {
    100% {
      opacity: 1;
    }
  }
`;

const CardHead = styled.p`
  text-align: center;
  font-size: 1.4rem;
`;

const Bar = styled.div`
  margin: 20px 0;
`;

const Info = styled.div`
  padding-bottom: 5px;
`;

const BarSpan = styled.span`
  font-weight: 500;
  font-size: 17px;
  opacity: 0;
  animation: var(--animateSpan);
`;

const ProgressLine = styled.div`
  height: 10px;
  background: #f0f0f0;
  transform: scaleX(0);
  transform-origin: left;
  border-radius: 10px;
  animation: var(--animatePline);
`;

const ProgressSpan = styled.div`
  height: 100%;
  position: absolute;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  background: #f5c32c;
  animation: var(--animatePlineSpan);
`;

const SpanSection = styled.section`
  position: absolute;
  top: -30px;
  right: 0;
  background: #000;
  padding: 2px 5px;
  font-size: 12px;
  border-radius: 4px;
  opacity: 0;
  animation: var(--animatePlineSpanBA);
  &:before {
    position: absolute;
    content: "";
    top: 20px;
    right: 0;
    border: 7px solid transparent;
    border-right-width: 0px;
    border-top-color: #000;
  }
`;

export default S_Cards;
