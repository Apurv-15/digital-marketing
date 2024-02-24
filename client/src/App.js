import React, { useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

import UserAuthContext from "./components/Auth0/UserAuthContext.js";
import Service from "./components/services/Service.js";
import Res1 from "./components/Features/ProductPage3/Res1.js";
import Res2 from "./components/Features/ProductPage3/Res2.js";
import Res3 from "./components/Features/ProductPage3/Res3.js";
import Res4 from "./components/Features/ProductPage3/Res4.js";
import MouseTrial from "./components/MouseTrail/MouseTrail.js";
import SignUp from "./components/Signup/Signup";
// import Login from "./components/Login/Login.jsx";

import Content from "./components/Hero_page/HeroPage.js";
import Images from "./components/Hero_page/Image/Image.js";

import Product1 from "./components/Features/ProductPage1/Product1.js";
import Product22 from "./components/Features/ProductPage2/Product22.js";
import NavBar from "./components/Navbar/Navbar.js";
import Animate1 from "./components/Animated_page/Animate1.js";

// import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  useEffect(() => {
    // Set up ScrollTrigger animations
    gsap.from(".Content", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: ".Content",
        start: "top center", // Adjust as needed
        end: "bottom center", // Adjust as needed
        scrub: true, // Smooth animation while scrolling
      },
    });

    gsap.from(".Info", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: ".Info",
        start: "top center", // Adjust as needed
        end: "bottom center", // Adjust as needed
        scrub: true, // Smooth animation while scrolling
      },
    });

    // Add zoom in/out animation on scroll
    gsap.from(".Images", {
      scale: 1.2,
      scrollTrigger: {
        trigger: ".Images",
        start: "top center", // Adjust as needed
        end: "bottom center", // Adjust as needed
        scrub: true, // Smooth animation while scrolling
      },
    });

    // Add more ScrollTrigger animations as needed
  }, []);

  return (
    <Router>
      {/* <div> */}
      <NavBar />
      <MouseTrial />
      {/* <Content timeline={tl} /> */}
      {/* <Images timeline={tl} ease={ease} /> */}

      {/* <Service /> */}

      <UserAuthContext>
        <Routes>
          <Route path="/signup" element={<SignUp />} />{" "}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/productadd" element={<Product1 />} />
          <Route path="/product22" element={<Product22 />} />
          <Route path="/res1" element={<Res1 />} />
          <Route path="/res2" element={<Res2 />} />
          <Route path="/res3" element={<Res3 />} />
          <Route path="/res4" element={<Res4 />} />
        </Routes>
      </UserAuthContext>
      {/* </div> */}
    </Router>
  );
};

export default App;
