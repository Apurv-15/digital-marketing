import React, { useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
// import { analytics, app } from "./components/firebase.config.js";
import UserAuthContext from "./components/Auth0/UserAuthContext.js";
import Thanks from "./components/Features/Thanks_response/Thank.js";
import Service from "./components/services/Service.js";
import Res1 from "./components/Features/ProductPage3/Res1.js";
import Res2 from "./components/Features/ProductPage3/Res2.js";
import Res3 from "./components/Features/ProductPage3/Res3.js";
import Res4 from "./components/Features/ProductPage3/Res4.js";
import MouseTrial from "./components/MouseTrail/MouseTrail.js";
import Details from "./components/services/details.js";
import SignUp from "./components/Signup/Signup";
// import Login from "./components/Login/Login.jsx";
import Contact from "./components/Contact/Contact.js";
import Collab from "./components/Collab/Collab.js";

import Content from "./components/Hero_page/HeroPage.js";
// import Images from "./components/Hero_page/Image/Images.js";
import Work from "./components/Work/Work.js";

import Product1 from "./components/Features/ProductPage1/Product1.js";
import Product22 from "./components/Features/ProductPage2/Product22.js";
import NavBar from "./components/Navbar/Navbar.js";
import Testimonials from "./components/Testimonials/Testimonials.js";

import "./App.css";
import Work from "./components/Work/Work.js";
import Connect from "./components/Connect/Connect.js"

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
    gsap.from(".Services", {
      scale: 1.2,
      scrollTrigger: {
        trigger: ".Services",
        start: "top center", // Adjust as needed
        end: "bottom center", // Adjust as needed
        scrub: true, // Smooth animation while scrolling
      },
    });

    // Add more ScrollTrigger animations as needed
    gsap.from(".Service", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: ".Service",
        start: "top center", // Adjust as needed
        end: "bottom center", // Adjust as needed
        scrub: true, // Smooth animation while scrolling
      },
    });
  }, []);

  return (
    <>
      <Router>
        <NavBar />

        <MouseTrial />
        {/* <div className="hero_section">
          <Content timeline={tl} />

          <Service />
        </div> */}

        <UserAuthContext>
          <Routes>
            <Route
              path="/"
              element={
                <>
<<<<<<< HEAD
                  <Content timeline={tl} />
                  <Service timeline={tl} />
                  <Collab />
                  {/* <Connect/> */}
=======
                  {/* <Content timeline={tl} /> */}
                  {/* <Service timeline={tl} /> */}
                  {/* <Collab /> */}
                  {/* <Work /> */}
                  {/* <Testimonials /> */}
>>>>>>> dd56a7c9270c3e84953cd99b3d9fa693018fe08f
                </>
              }
            />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />{" "}
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/productadd" element={<Product1 />} />
            <Route path="/product22" element={<Product22 />} />
            <Route path="/res1" element={<Res1 />} />
            <Route path="/res2" element={<Res2 />} />
            <Route path="/res3" element={<Res3 />} />
            <Route path="/res4" element={<Res4 />} />
            <Route path="/form_response" element={<Thanks />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </UserAuthContext>
        {/* </div> */}
      </Router>
    </>
  );
};

export default App;
