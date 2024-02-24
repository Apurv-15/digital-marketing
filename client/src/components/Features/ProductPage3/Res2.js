import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Res1234.css";
import { db } from "../../Firebase/firebase.config";
import { collection, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../Auth0/UserAuthContext";

const Res2 = () => {
  const [selectedCard1, setselectedCard1] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentuser } = useAuth();

  const productName1 = location.state?.productName;
  const locationName1 = location.state?.locationName;
  const budget1 = location.state?.budget;
  const ageGroup1 = location.state?.ageGroup;
  const res1_card_data = location.state?.cardData;

  console.log(currentuser);
  console.log("Product Name: ", productName1);
  console.log("Location Name: ", locationName1);
  console.log("Budget: ", budget1);
  console.log("Age Group: ", ageGroup1);
  console.log("Card Data: ", res1_card_data[0]);

  const handleButtonClick2 = async () => {
    if (selectedCard1 !== null) {
      let cardData1;
      if (selectedCard1 === 0) {
        cardData1 = "Facebook Ad's"; //enter value of data
      } else if (selectedCard1 === 1) {
        cardData1 = "Google Ad's";
      } else if (selectedCard1 === 2) {
        cardData1 = "Instagram Ad's";
      }

      try {
        const userEmail = currentuser?.email;

        const userCollectionRef = collection(db, userEmail);
        const productDocRef = doc(userCollectionRef, productName1);
        // setProductDocRef(doc(userCollectionRef, productName));

        await setDoc(productDocRef, {
          ageGroup: ageGroup1,
          location: locationName1,
          budget: budget1,
          Advertisment_Type: res1_card_data,
          Advertisment_Channel: cardData1,
          //add carddata2
        });
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleCardSelect = (index) => {
    setselectedCard1(index);
  };
  return (
    <>
      <div className="section1_1111">
        <div className="container-111">
          <div className="components-111">
            <div className="comp_111">
              <div
                className={`card ${selectedCard1 === 0 ? "selected" : ""}`}
                onClick={() => handleCardSelect(0)}
              >
                <img
                  src="https://www.wordstream.com/wp-content/uploads/2021/07/new-expanded-text-ads-serp-1.png"
                  alt="green iguana"
                />
                {selectedCard1 === 0 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Image</h5>
                  <p>lorem</p>
                </div>
              </div>
              <div
                className={`card ${selectedCard1 === 1 ? "selected" : ""}`}
                onClick={() => handleCardSelect(1)}
              >
                <img
                  src="https://www.tatango.com/wp-content/uploads/2014/12/SMS-Advertising-Example-From-Bloomingdales.png"
                  alt="green iguana"
                />
                {selectedCard1 === 1 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Text</h5>
                  <p>lorem</p>
                </div>
              </div>
              <div
                className={`card ${selectedCard1 === 2 ? "selected" : ""}`}
                onClick={() => handleCardSelect(2)}
              >
                <img
                  src="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2015/12/01185143/Top-12-Open-Source-Email-Marketing-Software.jpg"
                  alt="green iguana"
                />
                {selectedCard1 === 2 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Video</h5>
                  <p>lorem</p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-container" style={{ marginTop: "20px" }}>
            <button onClick={handleButtonClick2}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Res2;
