import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Res1234.css";
import { db } from "../../Firebase/firebase.config";
import { collection, doc, setDoc } from "firebase/firestore";
import { useAuth0 } from "@auth0/auth0-react";

const Res4 = () => {
  const [selectedCard4, setselectedCard4] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth0();

  const productName1 = location.state?.productName;
  const locationName1 = location.state?.locationName;
  const budget1 = location.state?.budget;
  const ageGroup1 = location.state?.ageGroup;
  const res1_card_data = location.state?.cardData;

  const handleButtonClick4 = async () => {
    if (selectedCard4 !== null) {
      let cardData4;
      if (selectedCard4 === 0) {
        cardData4 = "Youtube shorts"; //enter value of data
      } else if (selectedCard4 === 1) {
        cardData4 = "Instagram Reels";
      } else if (selectedCard4 === 2) {
        cardData4 = "Meta Ad's ";
      }

      try {
        const userEmail = user?.email;

        const userCollectionRef = collection(db, userEmail);
        const productDocRef = doc(userCollectionRef, productName1);
        // setProductDocRef(doc(userCollectionRef, productName));

        await setDoc(productDocRef, {
          ageGroup: ageGroup1,
          location: locationName1,
          budget: budget1,
          Advertisment_Type: res1_card_data,
          Advertisment_Channel: cardData4,
        });
      } catch (error) {
        console.log(error);
      }
      localStorage.removeItem("productFormData");
      console.log("db added successfully");
      navigate("/form_response", { state: { productName1 } });
    }
  };
  const handleCardSelect4 = (index) => {
    setselectedCard4(index);
  };
  return (
    <>
      <div className="section1_1111">
        <div className="container-111">
          <h1>
            SELECT YOUR PLATFORM
            <br />
          </h1>
          <div className="components-111">
            <div className="comp_111">
              <div
                className={`card ${selectedCard4 === 0 ? "selected" : ""}`}
                onClick={() => handleCardSelect4(0)}
              >
                <img
                  src="https://www.wordstream.com/wp-content/uploads/2021/07/new-expanded-text-ads-serp-1.png"
                  alt="green iguana"
                />
                {selectedCard4 === 0 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Youtube shorts</h5>
                </div>
              </div>
              <div
                className={`card ${selectedCard4 === 1 ? "selected" : ""}`}
                onClick={() => handleCardSelect4(1)}
              >
                <img
                  src="https://www.tatango.com/wp-content/uploads/2014/12/SMS-Advertising-Example-From-Bloomingdales.png"
                  alt="green iguana"
                />
                {selectedCard4 === 1 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Instagram Reels</h5>
                </div>
              </div>
              <div
                className={`card ${selectedCard4 === 2 ? "selected" : ""}`}
                onClick={() => handleCardSelect4(2)}
              >
                <img
                  src="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2015/12/01185143/Top-12-Open-Source-Email-Marketing-Software.jpg"
                  alt="green iguana"
                />
                {selectedCard4 === 2 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Meta Ad's</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button onClick={handleButtonClick4}>Previous</button>

            <button onClick={handleButtonClick4}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Res4;
