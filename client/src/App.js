import React from "react";
import { gsap, Power3 } from "gsap";
import Content from "./components/Hero_page/HeroPage.js";
import Images from "./components/Hero_page/Image/Image.js";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/index2.js";
import Mind from "./components/Project_in_mind/Mind.js";
import { Info } from "./components/Info_page/Info.js";
import Animate1 from "./components/Animated_page/Animate1.js";
import Animate2 from "./components/Animated_page/Animate2.js";
const App = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;
  const darkTheme = true;
  return (
    <Router>
      <div>
        {/* <Navbar/>  */}
        <div className="hero-container">
          <Content timeline={tl} />
          <Images timeline={tl} ease={ease} />

          {/* <Mind/> */}
          {/* <Animate1 /> */}
          {/* <Animate2 /> */}
          <Service></Service>
          <Info></Info>
        </div>
        <div></div>
      </div>
    </Router>
  );
};

export default App;
