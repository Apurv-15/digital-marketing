import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Product1.css";
import Lottie from "react-lottie";
import animationData from "../../Images and video/Animation_productadd.json";

const Product1 = () => {
  const navigate = useNavigate();

  const handleAddItem = () => {
    // Navigate to the new page and replace the current one
    navigate("/product22", { replace: true });
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="add-item-container">
      <div className="centered-content">
        <h2 className="h2_text">Add Products for Marketing now !</h2>
        <button className="add-item-button" onClick={handleAddItem}>
          <FaPlus className="icon" /> Add Item
        </button>
        {/* <p className="empty-text">Empty Item - Add Now</p>  */}
      </div>
      <div className="lottie_animation1">
        <Lottie
          options={lottieOptions}
          height={550}
          width={800}
          marginTop={30}
        />
      </div>
    </div>
  );
};

export default Product1;
