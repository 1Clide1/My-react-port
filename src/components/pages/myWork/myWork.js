// import react and css
import React from "react";
// import { useEffect } from "react";
import "./myWork.css";
// import swiper js to get the cool carousel slider
import { Swiper, SwiperSlide } from "swiper/react";
// import the required modules from swiper js
import { Pagination } from "swiper";
// also have to import the swiper css to have it work
import "swiper/css";
import "swiper/css/pagination";

function MyWork() {
  // leaving my animate functions commented out until I figure out how to incopriate this after the page loads

  // get the work container that way I do not need to use it throughout all of the functions
  //   const workContainer = document.querySelector(".work-container");
  // card animation
  //   function cardAnimate() {
  //     workContainer.addEventListener("mousemove", (e) => {
  //       let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  //       let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  //       workContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  //     });
  //   }
  //   when mouses enters animation
  //   function enterAnimate() {
  //     workContainer.addEventListener("mouseenter", () => {
  //       workContainer.style.transition = "none";
  //     });
  //   }
  // on mouse leave stop the animation
  //   function leaveAnimate() {
  //     workContainer.addEventListener("mouseleave", () => {
  //       workContainer.style.transition = "all 0.5s ease";
  //       workContainer.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //     });
  //   }
  return (
    <Swiper
      // settings for swiper js
      modules={[Pagination]}
      pagination={
        ({ dynamicBullets: true },
        true,
        {
          clickable: true,
        })
      }
      grabCursor={true}
      loop={true}
      preventClicks={true}
      className="mySwiper"
      id="My Work"
    >
      <div title="My-work">
        <SwiperSlide>
          <div className="my-work-title-container">
            <h2 className="my-work-title"> Welcome To My Work</h2>
            <p className="work-desc">
              To see the projects, (hold click and) swipe &#8592; left or
              (click) tap on the bullet points to see my projects. If a project
              intrests you, click on the project to check it out!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            // onMouseMove={cardAnimate}
            // onMouseEnter={enterAnimate}
            // onMouseLeave={leaveAnimate}
            className="work-container"
          >
            <div className="work-title-container">
              <h3 className="work-title"> Parlay Owl 🦉</h3>
              <hr />
            </div>
            <a
              href="https://calm-brook-70069.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="work-img"
                src={process.env.PUBLIC_URL + "/Assets/Images/parlay.png"}
                alt="tech-blog"
              />
            </a>
            <p className="app-desc">
              An app to check out the latest sports bets and to find a cool
              sports bar near you!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            // onMouseMove={cardAnimate}
            // onMouseEnter={enterAnimate}
            // onMouseLeave={leaveAnimate}
            className="work-container"
          >
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
            <p className="app-desc">
              A blog focused on all things tech, check it out!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            // onMouseMove={cardAnimate}
            // onMouseEnter={enterAnimate}
            // onMouseLeave={leaveAnimate}
            className="work-container"
          >
            <div className="work-title-container">
              <h3 className="work-title"> Employee Tracker</h3>
              <hr />
            </div>
            <a
              href="https://github.com/1Clide1/Company-Employee-Tracker"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="work-img"
                src={
                  process.env.PUBLIC_URL + "/Assets/Images/employee-tracker.png"
                }
                alt="tech-blog"
              />
            </a>
            <p className="app-desc">
              A terminal app for a company to view their employees and add new
              employees to the company.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            // onMouseMove={cardAnimate}
            // onMouseEnter={enterAnimate}
            // onMouseLeave={leaveAnimate}
            className="work-container"
          >
            <div className="work-title-container">
              <h3 className="work-title"> Javascript Quiz</h3>
              <hr />
            </div>
            <a
              href="https://1clide1.github.io/Brandon-s-Quiz-Show-/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="work-img"
                src={process.env.PUBLIC_URL + "/Assets/Images/quiz-show.png"}
                alt="tech-blog"
              />
            </a>
            <p className="app-desc">
              A fun short quiz app testing your knowledge about Javascript. Can
              you answer all the questions right?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            // onMouseMove={cardAnimate}
            // onMouseEnter={enterAnimate}
            // onMouseLeave={leaveAnimate}
            className="work-container"
          >
            <div className="work-title-container">
              <h3 className="work-title"> Backend E-comerce API</h3>
              <hr />
            </div>
            <a
              href="https://github.com/1Clide1/Backend-On-A-E-commerce-site"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="work-img"
                src={
                  process.env.PUBLIC_URL + "/Assets/Images/backend-ecomerce.png"
                }
                alt="tech-blog"
              />
            </a>
            <p className="app-desc">
              A custom api for an e-commerce website powered by Javascript,
              express, and MySQL.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            // onMouseMove={cardAnimate}
            // onMouseEnter={enterAnimate}
            // onMouseLeave={leaveAnimate}
            className="work-container"
          >
            <div className="work-title-container">
              <h3 className="work-title"> Work Scheduler</h3>
              <hr />
            </div>
            <a
              href="https://1clide1.github.io/My-Daily-Planner-Website-App/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="work-img"
                src={
                  process.env.PUBLIC_URL + "/Assets/Images/work-scheduler.png"
                }
                alt="tech-blog"
              />
            </a>
            <p className="app-desc">
              A cool app to help maintain and write down all your activities
              throughout your work day.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            // onMouseMove={cardAnimate}
            // onMouseEnter={enterAnimate}
            // onMouseLeave={leaveAnimate}
            className="work-container"
          >
            <div className="work-title-container">
              <h3 className="work-title"> Readme Generator</h3>
              <hr />
            </div>
            <a
              href="https://github.com/1Clide1/My-Readme-Generator-Inquirer-"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="work-img"
                src={process.env.PUBLIC_URL + "/Assets/Images/readme-gen.png"}
                alt="tech-blog"
              />
            </a>
            <p className="app-desc">
              Super useful terminal app that helps generate markdown ReadMes
              just by filling out a series of questions.
            </p>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
}

export default MyWork;
