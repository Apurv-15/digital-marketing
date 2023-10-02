import React from "react";
import Navbar1 from "./components/Navbar/Index1";
import { BrowserRouter as Router } from "react-router-dom";
import HeroPage from "./components/Hero page/HeroPage";
import "./App.css";
import Service from "./components/services/Service";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar1 />

        {/* First HeroPage */}
        <div className="hero-container">
          <HeroPage />
        </div>

        {/* Second HeroPage */}
        <div className="hero-container">
        <Service/>
        </div>
      </div>
    </Router>
  );
};

export default App;
