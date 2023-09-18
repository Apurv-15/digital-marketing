import React from "react";
import "./HeroPage.css";
import { Container, Row, Col } from "react-bootstrap";
const HeroPage = () => {
  return (
    <div>
      <section className="showcase">
        <div className="text">
          <h2>Discover the new hope</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          {/* Use the Link component for navigation */}
          {/* <Link to="/home">Reserve Now</Link> */}
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
