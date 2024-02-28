import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Res1234.css";
import Lottie from "react-lottie";
import animationData from "../../Images and video/Animation_image_res1.json";
import animationData2 from "../../Images and video/Animation_video_res1.json";

const Res1 = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const productName = location.state?.productName;
  const locationName = location.state?.locationName;
  const ageGroup = location.state?.ageGroup;
  const budget = location.state?.budget;

  const handleButtonClick = async () => {
    if (selectedCard !== null) {
      var cardData;
      if (selectedCard === 0) {
        cardData = "Image";
      } else if (selectedCard === 1) {
        cardData = "Text";
      } else if (selectedCard === 2) {
        cardData = "Video";
      }

      try {
        // Now, navigate to the next page
        if (selectedCard === 0) {
          navigate("/res2", {
            state: { cardData, productName, locationName, ageGroup, budget },
          });
        } else if (selectedCard === 1) {
          navigate("/res3", {
            state: { cardData, productName, locationName, ageGroup, budget },
          });
        } else if (selectedCard === 2) {
          navigate("/res4", {
            state: { cardData, productName, locationName, ageGroup, budget },
          });
        }
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  };
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lottieOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };
  return (
    <>
      <div className="section1_1111">
        <div className="container-111">
          <div className="components-111">
            <div className="comp_111">
              <div
                className={`card ${selectedCard === 0 ? "selected" : ""}`}
                onClick={() => handleCardSelect(0)}
              >
                <Lottie
                  options={lottieOptions}
                  height={150} // Set the height as per your design
                  width={150} // Set the width as per your design
                />
                {selectedCard === 0 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Image</h5>
                </div>
              </div>
              <div
                className={`card ${selectedCard === 1 ? "selected" : ""}`}
                onClick={() => handleCardSelect(1)}
              >
                <Lottie
                  options={lottieOptions2}
                  height={150} // Set the height as per your design
                  width={150} // Set the width as per your design
                />

                {selectedCard === 1 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Text</h5>
                </div>
              </div>
              <div
                className={`card ${selectedCard === 2 ? "selected" : ""}`}
                onClick={() => handleCardSelect(2)}
              >
                <img
                  src="https://i.natgeofe.com/n/5506954d-6e0f-444c-aa83-a24adbe874e1/reptiles-hero_4x3.jpg"
                  alt="green iguana"
                />
                {selectedCard === 2 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Video</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button onClick={handleButtonClick}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Res1;
