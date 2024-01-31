import React from "react";
import { gsap, Power3 } from "gsap";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
// import Mind from "./components/Project_in_mind/Mind.js";
// import { Info } from "./components/Info_page/Info.js";
// import Service from "./components/services/Service.js";
// import Content from "./components/Hero_page/HeroPage.js";
// import Images from "./components/Hero_page/Image/Image.js";
// import Testimonials from "./components/Testimonials/Testimonials.jsx";
// import Signup from './components/Signup/Signup'
// import UserAuthContext from '../src/components/context/UserAuthContext';

let tl = new gsap.timeline();
let ease = Power3.easeOut;
const darkTheme = true;

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="hero-container">
          {/*<Mind />
          <Service />
          <Info />
          <UserAuthContext>
          <Signup />
          </UserAuthContext> 
        <Testimonials/> */}
          </div>
      </div>
    </Router>
  );
};

export default App;
