import React from "react";
import { gsap, Power3 } from "gsap";
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
const App = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;
  const darkTheme = true;
  return (
    <BrowserRouter>
      <div>
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
  );
};

export default App;


