// make sure to captialize react when importing react when using a funciton and return
import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
// importing the resume that way I can guarantee the proper download
import resume from "../../resume/BrandonDiaz.docx";
// make sure to just use a function when creating components that way you can actually use proper vars inside to create more complex html elements
function Navbar() {
  // setting the state of the mobile navbar menu
  const [clicked, setClick] = useState(false);
  const handleClick = () => {
    setClick(!clicked);
  };
  // this closes the li elements in the navbar
  const closeMenu = () => {
    setClick(!clicked);
  };
  return (
    <nav className="navbar-container">
      <div className="logo">
        <a className="logo-a" href="#About Me">
          Brandon Diaz
        </a>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "lni lni-cross-circle" : "lni lni-menu"}></i>
      </div>
      <ul className={clicked ? "nav-ul active" : "nav-ul"}>
        {MenuItems.map((item, index) => {
          return (
            // make sure li always has a key
            <li key={index} onClick={closeMenu}>
              <a className={item.cName} href={item.url}>
                {item.name}
              </a>
            </li>
          );
        })}
        {/* link to download resume */}
        <li>
          <a
            className="navbar-links"
            href={resume}
            download="Brandon Diaz Resume.docx"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

// make sure to always export
export default Navbar;
