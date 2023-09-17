import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElement";
import "./NavBar.css";
import { useAuth0 } from "@auth0/auth0-react";

const Index1 = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <Nav className="navbar">
        <NavLink to="/" className="nav-logo">
          <h1>Home</h1>
        </NavLink>
        {/* Align the "Bars" component to the right */}
        <Bars className="nav-bars" onClick={toggleNav} />
        <NavMenu showNav={showNav}>
          <NavLink to="/" className="nav-item">
            About
          </NavLink>
          <NavLink to="/" className="nav-item">
            Policy
          </NavLink>
          <NavLink to="/" className="nav-item">
            Contact Us
          </NavLink>
          <NavLink to="/" className="nav-item">
            FAQs
          </NavLink>
        </NavMenu>

        <NavBtn className="nav-btn">
          <NavBtnLink onClick={() => loginWithRedirect()}>
            Log In/Register
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Index1;
