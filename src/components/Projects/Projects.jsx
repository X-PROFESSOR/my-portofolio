import React from 'react'
import './Projects.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/navigation";
import { Navigation } from "swiper";

// let slide = document.querySelectorAll(".swiper-slide")
// if (slide.classList.contains("swiper-slide-active")) {
//   console.log("hi");
// }

const params = {
  navigation: true,
  modules: [Navigation],
  grabCursor: true,
  className: 'projects-slider',
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 0,
    }
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
              <p className="cardName">Exam Management System</p>
              <p className="cardDetails">
                Online Exam Management System Using HTML, CSS, Javascript</p>
              <button className="viewProject">View Project</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-cards">
              <p className="cardName">fkjfrykftyk</p>
              <p className="cardDetails">
                Online Exam Management System Using HTML, CSS, Javascript</p>
              <button className="viewProject">View Project</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-cards">
              <p className="cardName">drt5kmrt5k</p>
              <p className="cardDetails">
                Online Exam Management System Using HTML, CSS, Javascript</p>
              <button className="viewProject">View Project</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-cards">
              <p className="cardName">dtr5y7kt5dekt</p>
              <p className="cardDetails">
                Online Exam Management System Using HTML, CSS, Javascript</p>
              <button className="viewProject">View Project</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

  // if (document.body.classList.contains('swiper-slide-active')) {
  //   this.classList.add('ml-3')
  // }


export default Projects