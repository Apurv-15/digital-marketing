import React from "react";

// Main Component
function Details() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header className="header">
      <h1>Discover the Power of Digital Marketing with Impressive Results</h1>
    </header>
  );
}

// Main Content Component
function MainContent() {
  return (
    <main className="main-content">
      <div className="stats">
        <Stat percentage={50} text="Growth" />
        <Stat percentage={50} text="Conversion Rate" />
        <Stat percentage={50} text="ROI and Customer Engagement" />
      </div>
      <p>
        Our digital marketing strategies have helped numerous businesses
        achieve their goals and boost their online presence.
      </p>
    </main>
  );
}

// Stat Component
function Stat({ percentage, text }) {
  return (
    <div className="stat">
      <div className="percentage">{percentage}%</div>
      <div className="stat-text">{text}</div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <p>Copyright &copy; 2023 Your Company</p>
    </footer>
  );
}

export default Details;