import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase/firebase.config";
import { collection, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../Auth0/UserAuthContext";
import "./Product22.css";
import animationData from "../../Images and video/Animation_for_forms.json";
import Lottie from "react-lottie";

const Product22 = () => {
  const navigate = useNavigate();
  const { currentuser } = useAuth();

  const [selectedValue, setSelectedValue] = useState("");
  const [productName, setProductName] = useState("");
  const [locationName, setLocationName] = useState("");
  const [budget, setBudget] = useState("");

  const handleDropDown = (event) => {
    setSelectedValue(event.target.value);
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
    navigate("/res1", { replace: true });

    try {
      // Get user email from Auth0
      const userEmail = currentuser?.email;

      // Construct Firestore collection references
      const userCollectionRef = collection(db, userEmail);
      const productDocRef = doc(userCollectionRef, productName);

      // Set document data
      await setDoc(productDocRef, {
        ageGroup: selectedValue,
        location: locationName,
        budget: budget,
      });

      // Navigate to the next page
      navigate("/product3", { replace: true });
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
              <Lottie options={lottieOptions} height={450} width={400} />
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
                />
              </div>

              <label htmlFor="Product_Name">Target Audience</label>
              <select
                className="select_1"
                value={selectedValue}
                onChange={handleDropDown}
                required
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
