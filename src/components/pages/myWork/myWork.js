// import react and css
import React from "react";
import "./myWork.css";
// import swiper js to get the cool carousel slider
import { Swiper, SwiperSlide } from "swiper/react";
// import the required modules from swiper js
import { Pagination } from "swiper";
// also have to import the swiper css to have it work
import "swiper/css";
import "swiper/css/pagination";

function MyWork() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      id="My Work"
    >
      <div title="My-work">
        <SwiperSlide>
          <div className="my-work-title-container">
            <h2 className="my-work-title"> Welcome To My Work</h2>
            <p className="work-desc">
              This is a selection of my work, swipe through to see my projects.
              If a project intrests you, click on the project to check it out!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="work-container">
            <div className="work-title-container">
              <h3 className="work-title"> Tech Blog</h3>
              <hr />
            </div>
            <a
              href="https://my-cool-tech-blog.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="work-img"
                src={process.env.PUBLIC_URL + "/Assets/Images/tech-blog.png"}
                alt="tech-blog"
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>fes</SwiperSlide>
        <SwiperSlide>fsefe</SwiperSlide>
      </div>
    </Swiper>
  );
}

export default MyWork;
