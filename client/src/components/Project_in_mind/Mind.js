import React, { useState } from "react";
import "./Mind1.css";

const ExpandedCard = ({ onClose, content }) => (
  <div className="expanded-card">
    <div className="expanded-card-content">
      {/* Additional content goes here, e.g., image and more info */}
      <img src="https://example.com/your-image.jpg" alt="Additional Info" />
      <p>{content}</p>
    </div>
    <div className="close-button" onClick={onClose}>
      Close
    </div>
  </div>
);

const Mind = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handleClose = () => {
    setExpandedCard(null);
  };

  return (
    <div>
      <div className="head-content">
        <h1>Have project in mind?</h1>
        <p>
          Your project is important to us, and we're excited to bring your ideas
          to life. Our dedicated team is ready to collaborate, innovate, and
          deliver exceptional results tailored to your vision and goals. Let's
          turn your project into a success story together.
        </p>
      </div>

      <div className="card-container">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className={`card ${expandedCard === index ? "clicked" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-image"></div>
            <div className="card-text">
              <span className="date">4 days ago</span>
              <h2>Post One</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
                temporibus omnis illum maxime quod deserunt eligendi dolor
              </p>
              {expandedCard === index && (
                <ExpandedCard
                  onClose={handleClose}
                  content="Additional information goes here."
                />
              )}
            </div>
            <div className="type">Read More</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mind;
