import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase, faEnvelope, faFileAlt, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <Nav className="navbar">
        <NavLink to="/" className="nav-logo" style={{ color: 'orange', fontSize: '1.3rem' }}>
          <h1>Kahanikars</h1>
        </NavLink>
        <Bars onClick={toggleNav} />
        <NavMenu showNav={showNav}>
          <NavLink to="/about" className="nav-item">
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }}/>
            AboutUs
          </NavLink>
          <NavLink to="/policy" className="nav-item">
            <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '8px' }}/>
            Services
          </NavLink>
          <NavLink to="/contact" className="nav-item">
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
            ContactUs
          </NavLink>
          <NavLink to="/faqs" className="nav-item">
            <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '8px' }} />
            Policy
          </NavLink>
          <NavLink to="/faqs" className="nav-item">
            <FontAwesomeIcon icon={faQuestionCircle} style={{ marginRight: '8px' }} />
            FAQs
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
