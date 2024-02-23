import React, { useEffect } from "react";
import { gsap, Power3 } from "gsap";
<<<<<<< HEAD
// import Content from "./components/Hero_page/HeroPage.js";
// import Images from "./components/Hero_page/Image/Image.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
// import Service from "./components/services/Service.js";
// import Footer from "./components/Footer/Footer";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
// import Mind from "./components/Project_in_mind/Mind.js";
// import { Info } from "./components/Info_page/Info.js";
// import Animate1 from "./components/Animated_page/Animate1.js";
// import Animate2 from "./components/Animated_page/Animate2.js";
// import Product1 from "./components/Features/ProductPage1/Product1.js";
// import Product2 from "./components/Features/ProductPage2/Product2.js";
// import Contact from "./components/Contact/Contact.js";
// import Collab from "./components/Collab/Collab.js";
import UserAuthContext from "./components/context/UserAuthContext.js";
import Login from "./components/Login/Login.jsx";
// import Signup from "./components/Signup/Signup.js";
// import Testimonials from "./components/Testimonials/Testimonials.jsx";
// import Strategies from "./components/Strategies/Strategies.js";
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

import Content from "./components/Hero_page/HeroPage.js";
import Images from "./components/Hero_page/Image/Image.js";
import Service from "./components/services/Service.js";
import { Info } from "./components/Info_page/Info.js";
import Product1 from "./components/Features/ProductPage1/Product1.js";
import Product2 from "./components/Features/ProductPage2/Product2.js";
import Product22 from "./components/Features/ProductPage2/Product22.js";
import SignUp from "./components/Signup/Signup";
import UserAuthContext from "./components/Auth0/UserAuthContext.js";

// import Animate1 from "./components/Animated_page/Animate1.js";
import Animate2 from "./components/Animated_page/Animate2.js";
import Res1 from "./components/Features/ProductPage3/Res1.js";
import Res2 from "./components/Features/ProductPage3/Res2.js";
import Res3 from "./components/Features/ProductPage3/Res3.js";
import Res4 from "./components/Features/ProductPage3/Res4.js";
import MouseTrial from "./components/MouseTrail/MouseTrail.js";
import "./App.css";
gsap.registerPlugin(ScrollTrigger);

>>>>>>> 7b00dd41019333dd2931840a2e64a1e2132516bf
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

  const darkTheme = true;

  return (
    <BrowserRouter>
      <div>
<<<<<<< HEAD
      <Navbar />
        <div className="hero-container">
          {/*} <Content timeline={tl} />
          <Images timeline={tl} ease={ease} />*/}
          {/* <Product1 /> */}

          {/* <Mind/> */}
          {/* <Animate1 /> */}
          {/* <Animate2 /> */}
          {/*<Service></Service>*/}
          {/*<Info></Info>*/}
          {/* <Footer/> 
        <Strategies/>
        <Testimonials/>
        <UserAuthContext>
        <Signup/>
        </UserAuthContext>*/}
        <UserAuthContext>
        <Login/>
        </UserAuthContext>
          <Routes>
            {/*<Route path="/" element={<Product1 />} />*/}
            {/*<Route path="/product2" element={<Product2 />} />
            <Route path="/" element={<Collab/>} />
        <Route path="Contact" element={<Contact/>} />*/}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
=======
        {/* <div className="hero-container"> */}
        <MouseTrial /> 
        {/* <Content timeline={tl} /> */}
        {/* <Images timeline={tl} ease={ease} /> */}

        {/* <Animate1 className="animate1" /> */}
        {/* <Animate2 className="animate2" /> */}
        <Service></Service>
        {/* <Info></Info> */}
        {/* <Footer /> */}
        <UserAuthContext>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/productadd" element={<Product1 />} />
            {/* <Route path="/product2" element={<Product2 />} /> */}
            <Route path="/product22" element={<Product22 />} />
            <Route path="/res1" element={<Res1 />} />

            <Route path="/res2" element={<Res2 />} />
            <Route path="/res3" element={<Res3 />} />
            <Route path="/res4" element={<Res4 />} />
            {/* <Route path="/product3" element={<Product3 />} /> */}
          </Routes>
        </UserAuthContext>
      </div>
      <div></div>
      {/* </div> */}
    </Router>
>>>>>>> 7b00dd41019333dd2931840a2e64a1e2132516bf
  );
};

export default App;


