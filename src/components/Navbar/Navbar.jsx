

import { useState } from "react";
import Button from "../Button/Button";
import "./Navbar.css";
import linkedInIcon from "/src/assets/icons/linkedin.svg"
import githubIcon from "/src/assets/icons/github.svg"
import contactIcon from "/src/assets/icons/contact.svg"
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
     
      <div className="navbar-main">
        <div className="navbar-child">
          <div className="navbar-logo">
            <span className="navbar-logo-span">JOHN</span>DOE
          </div>
        </div>

        <div className="navbar-child">
          <a>About</a>
          <a>Skills</a>
          <a>Projects</a>
        </div>

        <div className="navbar-child">
          <div className="navbar-child-inner-child">
            <img src={linkedInIcon} className="navbar-icon" />
            Linkedin
          </div>
          <div className="navbar-child-inner-child">
            <img src={githubIcon} className="navbar-icon" />
            Github
          </div>
          <Button
            text="Contact me"
            icon={contactIcon}
          />
        </div>
      </div>

   
      <div className="navbar-mobile">
        <div className="navbar-mobile-header">
          <div className="navbar-logo">
            <span className="navbar-logo-span">JOHN</span>DOE
          </div>

          <div
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {open && (
          <div className="navbar-mobile-menu">
            <div>About</div>
            <div>Skills</div>
            <div>Projects</div>

            <Button
              text="Contact me"
              icon={contactIcon}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
