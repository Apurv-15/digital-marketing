import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import HeroPage from "./components/Hero page/HeroPage";
import "./App.css";
import Service from "./components/services/Service";
import { Info } from "./components/Info page/Info";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="hero-container">
          {/* <HeroPage /> */}
          { <Service></Service> }
          {/* <Info></Info> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
