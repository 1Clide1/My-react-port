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
        <SwiperSlide>yoo</SwiperSlide>
        <SwiperSlide>fes</SwiperSlide>
        <SwiperSlide>fsefe</SwiperSlide>
      </div>
    </Swiper>
  );
}

export default MyWork;
