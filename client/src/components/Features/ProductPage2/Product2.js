import React, { useState } from "react";
import "./Product2.css";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase/firebase.config";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { useAuth } from '../../context/UserAuthContext';

const Product2 = () => {
  const navigate = useNavigate();
  const { currentuser, FullName } = useAuth();
  console.log("Current User in Product2:", currentuser);
  const [selectedValue, setSelectedValue] = useState("");
  const [productName, setProductName] = useState("");
  const [locationName, setLocationName] = useState("");
  const [Budget1, setBudgetName] = useState("");

  const handleDropDown = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleLocation = (event) => {
    setLocationName(event.target.value);
  };
  const handlePriceNameChange = (event) => {
    setBudgetName(event.target.value);
  };

  const handleClickButton = async (e) => {
    e.preventDefault();

    try {
      const userFullName = FullName;
  
      if (!userFullName) {
        console.error("User name is undefined or empty.");
        return;
      }
  
      const userCollectionRef = collection(db, "users", userFullName); // Update collection path
  
      const productDocRef = doc(userCollectionRef, productName);
  
      await setDoc(productDocRef, {
        ageGroup: selectedValue,
        location: locationName,
        Budget: Budget1,
      });
  
      navigate("/product3", { replace: true });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div className="form__1">
      <form action="javascript:void(0)">
        <fieldset>
          <legend>Enter Product information</legend>

          <label htmlFor="Product_Name">Product Name</label>
          <div className="custom-textfield">
            <input
              className="first_field"
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
            <option value="30">For all age group</option>
          </select>

          <label htmlFor="Product_Name">Advertisement Location</label>
          <input
            className="first_field"
            type="text"
            id="product-name"
            value={locationName}
            onChange={handleLocation}
            placeholder="Enter Location..."
            required
          />
          <label htmlFor="Product_Name">Enter Budget</label>

          <div className="custom-textfield">
            <input
              className="first_field"
              type="text"
              id="product-name"
              value={Budget1}
              onChange={handlePriceNameChange}
              placeholder="Enter Maximum budget"
              required
            />
          </div>

          <button className="button_1" onClick={handleClickButton}>
            Next
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Product2;