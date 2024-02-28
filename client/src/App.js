import React, { useEffect, useState } from "react";
import { gsap, Power3 } from "gsap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UserAuthContext from "./components/Auth0/UserAuthContext.js";
import Thanks from "./components/Features/Thanks_response/Thank.js";
import Service from "./components/services/Service.js";
import Res1 from "./components/Features/ProductPage3/Res1.js";
import Res2 from "./components/Features/ProductPage3/Res2.js";
import Res3 from "./components/Features/ProductPage3/Res3.js";
import Res4 from "./components/Features/ProductPage3/Res4.js";
import MouseTrial from "./components/MouseTrail/MouseTrail.js";
// import Details from "./components/services/details.js";
import Contact from "./components/Contact/Contact.js";
import Content from "./components/Hero_page/HeroPage.js";
import Work from "./components/Work/Work.js";
import Product1 from "./components/Features/ProductPage1/Product1.js";
import Product22 from "./components/Features/ProductPage2/Product22.js";
import NavBar from "./components/Navbar/Navbar.js";
import Testimonials from "./components/Testimonials/Testimonials.js";
import "./App.css";
import Loader from "./components/Loader/Loader.js";
import Collab from "./components/Collab/Collab.js";
import Connect from "./components/Connect/Connect.js";
import Strategies from "./components/Strategies/Strategies.js";
import Signup from "./components/Signup/Signup.js";
import NavBtn from "./components/Navbar_new/index2.js";
// import LoginNew from "./components/Log_in_auth0/LoginButton.js";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  useEffect(() => {
    // Set up ScrollTrigger animations
    gsap.from(".Content", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: ".Content",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Add more ScrollTrigger animations as needed
    gsap.from(".Service", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: ".Service",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className={`App ${isLoading ? "zoom-in" : ""}`}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Router>
            {/* <NavBar /> */}
            <NavBtn />

            {/* <MouseTrial /> */}
            <UserAuthContext>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Content timeline={tl} />
                      <Service />
                      <Collab />
                      <Strategies />
                      <Connect />
                      <Testimonials />
                    </>
                  }
                />
                <Route path="/Contact" element={<Contact />} />
                {/* <Route path="/Signup" element={<LoginNew />} /> */}

                <Route path="/productadd" element={<Product1 />} />
                <Route path="/product22" element={<Product22 />} />
                <Route path="/res1" element={<Res1 />} />
                <Route path="/res2" element={<Res2 />} />
                <Route path="/res3" element={<Res3 />} />
                <Route path="/res4" element={<Res4 />} />
                <Route path="/form_response" element={<Thanks />} />
              </Routes>
            </UserAuthContext>
          </Router>
        </>
      )}
    </div>
  );
};

export default App;
