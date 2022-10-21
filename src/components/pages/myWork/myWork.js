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
        {/* swiper js slider containers, containing the projects and their respective descriptions */}
        <SwiperSlide>
          <div className="my-work-title-container">
            <h2 className="my-work-title"> Welcome To My Work</h2>
            <p className="work-desc">
              To see the projects, (grab and) swipe &#8592; left. You can also
              (click or) tap on the bullet points to see my projects. If a
              project intrests you, click the project to check it out! You can
              also click the github icon to check out the repo aswell.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="work-container">
            <div className="work-title-container">
              <h3 className="work-title"> Keep Da Change </h3>
              <hr />
            </div>
            <a
              href="https://keepdachange.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="work-img"
                src={process.env.PUBLIC_URL + "/Assets/Images/keepdachange.png"}
                alt="Keep Da Change App"
              />
            </a>
            <a
              className="github-icon"
              href="https://github.com/1Clide1/tip-calculator"
              target="_blank"
              rel="noreferrer"
            >
              <i className="lni lni-github"></i>
            </a>
            <p className="app-desc">
              When, you're spending a night out and you just need to find out
              how much to tip for the bill? Then check out keep da change!
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
            <p className="app-desc">
              A site dedicated to making blogposts about tech.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="work-container">
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
            <a
              className="github-icon"
              href="https://github.com/1Clide1/Brandon-s-Quiz-Show-"
              target="_blank"
              rel="noreferrer"
            >
              <i className="lni lni-github"></i>
            </a>
            <p className="app-desc">
              A fun short quiz app testing your knowledge about Javascript. Can
              you answer all the questions right?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="work-container">
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
            <a
              className="github-icon"
              href="https://github.com/1Clide1/My-Daily-Planner-Website-App"
              target="_blank"
              rel="noreferrer"
            >
              <i className="lni lni-github"></i>
            </a>
            <p className="app-desc">
              A cool app to help maintain and write down all your activities
              throughout your work day.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="work-container">
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
          <div className="work-container">
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
