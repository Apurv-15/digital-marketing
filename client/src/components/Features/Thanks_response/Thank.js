import React from "react";
import "./Thank.css";
import animationData from "../../Images and video/Animation_for_tick.json";
import Lottie from "react-lottie";
import { useNavigate, useLocation } from "react-router-dom";

const Thank = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productName1 = location.state?.productName1;

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleButtonClick2 = () => {
    navigate("/productadd", { state: { productName1 } });
  };
  const handleButtonClick1 = () => {
    navigate("/");
  };

  return (
    <div className="outer">
      <div className="inner">
        <div className="inner-content">
          {/* <h2 className="title">
            Thank's for your response! <FaCheckCircle className="tick-icon" />
          </h2>
          <div className="button-container" style={{ marginTop: "20px" }}>
            <button onClick={handleButtonClick4}>Next</button> */}
          <div className="success-message">
            <div className="lottie_animate">
              <Lottie
                options={lottieOptions}
                height={490}
                width={400}
                //   marginTop={10}
              />
            </div>
            <h1 className="title">Your Form Received Successfully</h1>
            <div className="title1">
              <p>We will respond in approximately 24 Hour</p>
              <div className="button-container12">
                <button onClick={handleButtonClick1}>Home Page</button>
                <button onClick={handleButtonClick2}>View Your Products</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Thank;
