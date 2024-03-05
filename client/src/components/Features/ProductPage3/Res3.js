import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Res1234.css";
import { db } from "../../Firebase/firebase.config";
import { collection, doc, setDoc } from "firebase/firestore";
import { useAuth0 } from "@auth0/auth0-react";

const Res3 = () => {
  const [selectedCard3, setSelectedCard3] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentuser } = useAuth0();

  const productName1 = location.state?.productName;
  const locationName1 = location.state?.locationName;
  const budget1 = location.state?.budget;
  const ageGroup1 = location.state?.ageGroup;
  const res1_card_data = location.state?.cardData;

  const handleButtonClick3 = async () => {
    if (selectedCard3 !== null) {
      let carddata3;
      if (selectedCard3 === 0) {
        carddata3 = "Google Ad"; //enter value of data
      } else if (selectedCard3 === 1) {
        carddata3 = "Email";
      } else if (selectedCard3 === 2) {
        carddata3 = "Whatsapp promotion";
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
          Advertisment_Channel: carddata3,
          //add carddata4
        });
        localStorage.removeItem("productFormData");
        console.log("db added successfully");
      } catch (error) {
        console.log(error);
      }
      navigate("/form_response", { state: { productName1 } });
    }
  };

  const handleCardSelect3 = (index) => {
    setSelectedCard3(index);
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
                className={`card ${selectedCard3 === 0 ? "selected" : ""}`}
                onClick={() => handleCardSelect3(0)}
              >
                <img
                  src="https://tecnosoluciones.com/wp-content/uploads/2023/05/publicidad-digital-con-facebook-ads.png"
                  alt="green iguana"
                />
                {selectedCard3 === 0 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Image</h5>
                </div>
              </div>
              <div
                className={`card ${selectedCard3 === 1 ? "selected" : ""}`}
                onClick={() => handleCardSelect3(1)}
              >
                <img
                  src="https://static.semrush.com/blog/uploads/media/3b/1c/3b1c0ca3c9501eb49602f786f2745f32/social-media-ads.svg"
                  alt="green iguana"
                />
                {selectedCard3 === 1 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Text</h5>
                </div>
              </div>
              <div
                className={`card ${selectedCard3 === 2 ? "selected" : ""}`}
                onClick={() => handleCardSelect3(2)}
              >
                <img
                  src="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2015/12/01185143/Top-12-Open-Source-Email-Marketing-Software.jpg"
                  alt="green iguana"
                />
                {selectedCard3 === 2 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Video</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button onClick={handleButtonClick3}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Res3;
