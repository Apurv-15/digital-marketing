import React from "react";
import Navbar1 from "./components/Navbar/Index1";
import { BrowserRouter as Router } from "react-router-dom";
import HeroPage from "./components/Hero page/HeroPage";
import "./App.css";

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
          {/* Insert the second page here with white background */}
        </div>
      </div>
    </Router>
  );
};

export default App;
