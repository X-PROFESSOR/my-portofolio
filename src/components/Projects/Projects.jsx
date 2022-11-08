import React from 'react'
import './Projects.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper";
import 'swiper/css'
import "swiper/css/navigation";

const params = {
  navigation: true,
  modules: [Navigation],
  grabCursor: true,
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    840: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 4,
    },
  }
}

const Projects = () => {
  return (
    <div className="projects" id='Projects'>
      <div className="p-head">
        <p>My Recent</p>
        <p style={{ color: "#F5C32C", marginTop: "0.5rem" }}>Projects</p>
      </div>

      <div className="cards">
        <Swiper {...params}>
          <SwiperSlide>
            <div className="p-cards">
              <p className="cardName">Portfolio Project</p>
              <p className="cardDetails">
                My Portfolio written in ReactJS</p>
              <a href='https://github.com/X-PROFESSOR/my-portofolio' target='_blank' rel="noreferrer">
                <button className="viewProject">View Project</button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-cards">
              <p className="cardName">Online Exam<br></br>Management System</p>
              <p className="cardDetails">
                OEMS Using HTML, CSS, Javascript</p>
              <a href='https://github.com/X-PROFESSOR/Exam-Management-System' target='_blank' rel="noreferrer">
                <button className="viewProject">View Project</button>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-cards">
              <p className="cardName">Lorem ipsum</p>
              <p className="cardDetails">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className="viewProject">View Project</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-cards">
              <p className="cardName">Lorem ipsum</p>
              <p className="cardDetails">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className="viewProject">View Project</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-cards">
              <p className="cardName">Lorem ipsum</p>
              <p className="cardDetails">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className="viewProject">View Project</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Projects