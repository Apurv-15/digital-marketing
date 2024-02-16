import React, { useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

import Content from "./components/Hero_page/HeroPage.js";
import Images from "./components/Hero_page/Image/Image.js";
import Service from "./components/services/Service.js";
import { Info } from "./components/Info_page/Info.js";
import Product1 from "./components/Features/ProductPage1/Product1.js";
import Product2 from "./components/Features/ProductPage2/Product2.js";
import SignUp from "./components/Signup/Signup";
import UserAuthContext from "./components/Auth0/UserAuthContext.js";
import Animate1 from "./components/Animated_page/Animate1.js";
import Animate2 from "./components/Animated_page/Animate2.js";
import Res1 from "./components/Features/ProductPage3/Res1.js";
import Res2 from "./components/Features/ProductPage3/Res2.js";
import Res3 from "./components/Features/ProductPage3/Res3.js";
import Res4 from "./components/Features/ProductPage3/Res4.js";
import "./App.css";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  useEffect(() => {
    // Set up ScrollTrigger animations
    gsap.from(".animate1", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: ".animate1",
        start: "top center", // Adjust as needed
        end: "bottom center", // Adjust as needed
        scrub: true, // Smooth animation while scrolling
      },
    });

    gsap.from(".animate2", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: ".animate2",
        start: "top center", // Adjust as needed
        end: "bottom center", // Adjust as needed
        scrub: true, // Smooth animation while scrolling
      },
    });

    // Add more ScrollTrigger animations as needed
  }, []);

  const darkTheme = true;

  return (
    <Router>
      <div>
        <div className="hero-container">
          {/* <Content timeline={tl} /> */}
          {/* <Images timeline={tl} ease={ease} /> */}

          {/* <Animate1 className="animate1" /> */}
          {/* <Animate2 className="animate2" /> */}
          {/* <Service></Service> */}
          {/* <Info></Info> */}
          {/* <Footer /> */}
          <UserAuthContext>
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/productadd" element={<Product1 />} />
              <Route path="/product2" element={<Product2 />} />
              <Route path="/rec1" element={<Res1 />} />

              <Route path="/rec2" element={<Res2 />} />
              <Route path="/rec3" element={<Res3 />} />
              <Route path="/rec4" element={<Res4 />} />
              {/* <Route path="/product3" element={<Product3 />} /> */}
            </Routes>
          </UserAuthContext>
        </div>
        <div></div>
      </div>
    </Router>
  );
};

export default App;
