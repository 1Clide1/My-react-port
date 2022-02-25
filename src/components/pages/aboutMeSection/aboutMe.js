import React from "react";
import "./aboutMe.css";
import ProfileIcons from "../../profileIcons/profileIcons";
function AboutMe() {
  return (
    <div className="about-me-container" id="About Me">
      <div>
        <h2 className="about-me-title"> About Me</h2>
        <ProfileIcons />
      </div>
      <img
        className="profile-picture"
        src={process.env.PUBLIC_URL + "/Assets/Images/profilePicture.jpg"}
        alt="About-Me"
      />
      <section className="about-desc-container">
        <p className="about-desc">
          Hello my name is Brandon and this is my portfolio! I created this
          portfolio here with react as a cool and fun way to show my projects
          that I have made and what I am up to. Currently I am attending a
          coding bootcamp from Columbia University learining how to be a full
          stack developer. Feel free to check out my portfolio and I all of the
          cool projects that I have up so far and you can also click the icons
          below to check out my github, linkedin, and my instagram to see my
          other hobby. If you are interested or just want to ask me a question,
          you can contact me through the forum on my website and I will be more
          than happy to respond back. Enjoy the site and thanks for visiting!!
        </p>
        <h3 className="skills-title">My Skills</h3>
        <section className="skills-container">
          <p className="skills"> Javascript</p>
          <p className="skills"> HTML </p>
          <p className="skills"> CSS </p>
          <p className="skills"> Node JS </p>
          <p className="skills"> React </p>
          <p className="skills"> MySQL </p>
          <p className="skills"> MongoDB </p>
        </section>
      </section>
    </div>
  );
}

export default AboutMe;
