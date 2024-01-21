import React from "react";
import { gsap, Power3 } from "gsap";
import Content from "./components/Hero_page/HeroPage.js";
import Images from "./components/Hero_page/Image/Image.js"; 
import { BrowserRouter as Router } from "react-router-dom";
import Service from "./components/services/Service.js";
import "./App.css";
// import Navbar from "./components/Navbar/index2.js";
import { Info } from "./components/Info page/Info";
const App = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;
  return (
    <Router>
      <div>
        {/* <Navbar/>  */}
        <div className="hero-container">
          <Content timeline={tl} />
          <Images timeline={tl} ease={ease} />
          

          { <Service></Service> }
          <Info></Info>
        </div>
        <div>
        </div>
      </div>
    </Router>
  );
};

export default App;
