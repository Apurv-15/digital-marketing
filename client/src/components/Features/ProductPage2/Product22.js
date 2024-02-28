import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../Images and video/Animation_for_forms.json";
import "./Product22.css";
const Product22 = () => {
  const navigate = useNavigate();

  const [ageGroup, setAgeGroup] = useState("");
  const [productName, setProductName] = useState("");
  const [locationName, setLocationName] = useState("");
  const [budget, setBudget] = useState("");

  // Load form data from localStorage on component mount
  useEffect(() => {
    const storedFormData =
      JSON.parse(localStorage.getItem("productFormData")) || {};
    setAgeGroup(storedFormData.ageGroup || "");
    setProductName(storedFormData.productName || "");
    setLocationName(storedFormData.locationName || "");
    setBudget(storedFormData.budget || "");
  }, []);

  const handleDropDown = (event) => {
    setAgeGroup(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleLocation = (event) => {
    setLocationName(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleClickButton = async (e) => {
    e.preventDefault();
    try {
      // Save form data to localStorage
      localStorage.setItem(
        "productFormData",
        JSON.stringify({ ageGroup, productName, locationName, budget })
      );
      navigate("/res1", {
        state: {
          productName,
          locationName,
          budget,
          ageGroup,
        },
      });
    } catch (error) {
      console.error("Error adding document: ", error);
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

  return (
    <div className="section1_1">
      <div className="container">
        <div className="components">
          <div className="container_1">
            <div className="animation_section">
              <Lottie
                options={lottieOptions}
                height={450}
                width={400}
                marginTop={30}
              />
            </div>

            <div className="product_info">
              <label htmlFor="Product_Name">Product Name</label>
              <div className="custom-textfield">
                <input
                  className="form__input"
                  type="text"
                  id="product-name"
                  value={productName}
                  onChange={handleProductNameChange}
                  placeholder="Enter name"
                  required
                  autoComplete="off"
                />
              </div>

              <label htmlFor="Product_Name">Target Audience</label>
              <select
                className="select_1"
                value={ageGroup}
                onChange={handleDropDown}
                required
                autoComplete="off"
              >
                <option value="" disabled selected>
                  Select age group
                </option>
                <option value="10">For children</option>
                <option value="20">For adults</option>
                <option value="30">For all age groups</option>
              </select>

              <label htmlFor="Product_Name">Advertisement Location</label>
              <input
                className="form__input"
                type="text"
                id="product-location"
                value={locationName}
                onChange={handleLocation}
                placeholder="Enter Location..."
                required
                autoComplete="off"
              />

              <label htmlFor="Product_Name">Enter Budget</label>
              <div className="custom-textfield">
                <input
                  className="form__input"
                  type="text"
                  id="product-budget"
                  value={budget}
                  onChange={handleBudgetChange}
                  placeholder="Enter Maximum budget"
                  required
                  autoComplete="off"
                />
              </div>

              <button className="button_1" onClick={handleClickButton}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product22;
