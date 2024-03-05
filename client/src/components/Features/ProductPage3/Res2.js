import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Res1234.css";
import { db } from "../../Firebase/firebase.config";
import { collection, doc, setDoc } from "firebase/firestore";
import { useAuth0 } from "@auth0/auth0-react";

const Res2 = () => {
  const [selectedCard1, setselectedCard1] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentuser } = useAuth0();

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
        localStorage.removeItem("productFormData");
        console.log("db added successfully");
        playSoundEffect();
      } catch (error) {
        console.error(error);
      }
      navigate("/form_response", { state: { productName1 } });
    }
  };
  const playSoundEffect = () => {
    const audio = new Audio("../../Images and video/notify_sound.mp3");
    audio.play();
  };
  const handleCardSelect = (index) => {
    setselectedCard1(index);
  };
  return (
    <>
      <div className="section1_1111">
        <div className="container-111">
          <h1>
            SELECT PLATFORM...
            <br />
          </h1>
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
                  <h5>Facebook Ad's</h5>
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
                  <h5>Google Ad's</h5>
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
                  <h5>Instagram Ad's</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button onClick={handleButtonClick2}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Res2;
