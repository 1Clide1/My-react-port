// import what I need
import React from "react";
import "./footer.css";
import ProfileIcons from "../profileIcons/profileIcons";

function Footer() {
  return (
    <section className="footer-container">
      <p className="footer-content">
        Created by
        <a
          className="github-link"
          href="https://github.com/1Clide1"
          target="_blank"
          rel="noreferrer"
        >
          Brandon Diaz
        </a>
        &copy;2022
      </p>
      <ProfileIcons />
    </section>
  );
}

export default Footer;
