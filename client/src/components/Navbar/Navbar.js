import React, { useState, NavBtn, NavBtnLink } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBriefcase,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <NavLink
          to="/"
          className="nav-logo"
          style={{
            color: "orange",
            fontSize: "2.5rem",
            fontWeight: "400",
            display: "grid",
            gridColumn: "2/3",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <h1>Kahanikars</h1>
        </NavLink>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">
                <FontAwesomeIcon icon={faUser} style={{ marginRight: "8px" }} />
                AboutUs
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  style={{ marginRight: "8px" }}
                />
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/service">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ marginRight: "8px" }}
                />
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ marginRight: "8px" }}
                />
                ContactUs
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="login-button">
                Login/Signin
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100083795178955&locale2=hi_IN&paipv=0&eav=AfblL-haEe-Uzy--wp4EcAJInP1HjWQzmm2Ai1Lx5Dggj--fbtYOB_0Diyk3ZZahB88&_rdr"
                target="_thapa"
              >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/kahanikars/" target="_thapa">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sujith-panicker-504707203/?originalSubdomain=in"
                target="_thapa"
              >
                <FaLinkedinIn className="likedin" />
              </a>
            </li>
            </ul>
            
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
