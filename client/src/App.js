import React from "react";
import { gsap, Power3 } from "gsap";
import Content from "./components/Hero_page/HeroPage.js";
import Images from "./components/Hero_page/Image/Image.js"; 
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/index2.js";
import { Info } from "./components/Info page/Info";
const App = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;
  return (
    <Router>
      <div>
        <Navbar/> 
        <div className="hero-container">
<<<<<<< HEAD
          {/* <HeroPage /> */}
          { <Service></Service> }
          {/* <Info></Info> */}
=======
          <Content timeline={tl} />
          <Images timeline={tl} ease={ease} />
          

          {/* <Service></Service> */}
          <Info></Info>
>>>>>>> c04ce8310b2e687946d4bbe93807d4713c31ddf9
        </div>
        <div>
        </div>
      </div>
    </Router>
  );
};

export default App;
