import React from "react";
import Navbar1 from "./components/Navbar/Index1";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Uncomment this line
import HeroPage from "./components/Hero page/HeroPage";

const App = () => {
  return (
    <Router>
      {/* Wrap your components with the Router component */}
      <div>
        <Navbar1 />
        <HeroPage />
      </div>
    </Router>
  );
};

// Define your route components here
// const Home = () => <div>Home Page</div>;

export default App;
