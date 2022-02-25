import React from "react";
// importing my icon items to my profile icons component
import { iconItems } from "./iconsItems";
// import the css for the icons
import "./profileIcons.css";
function ProfileIcons() {
  return (
    <section title="profile-icons" className="profile-icons-container">
      {iconItems.map((item, index) => {
        return (
          <a
            key={index}
            className={item.cName}
            href={item.url}
            target={item.target}
            rel={item.rel}
          >
            <i className={item.iconName}></i>
          </a>
        );
      })}
    </section>
  );
}

export default ProfileIcons;
