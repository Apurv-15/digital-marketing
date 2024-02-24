
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Res1234.css';

const Res4 = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentuser } = useAuth();

  const productName1 = location.state?.productName;
  const locationName1 = location.state?.locationName;
  const budget1 = location.state?.budget;
  const ageGroup1 = location.state?.ageGroup;
  const res1_card_data = location.state?.cardData;

  const handleButtonClick1 = async () => {
    if (selectedCard4 !== null) {
      let cardData4;
      if (selectedCard4 === 0) {
        cardData4 = ""; //enter value of data
      } else if (selectedCard4 === 1) {
        cardData4 = "";
      } else if (selectedCard4 === 2) {
        cardData4 = "";
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
          // Advertisment_Channel: cardData4col,
          //add carddata4
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="section1_1111">
        <div className="container-111">
          <div className="components-111">
            <div className="comp_111">
              <div className={`card ${selectedCard === 0 ? 'selected' : ''}`} onClick={() => handleCardSelect(0)}>
                <img src="https://www.wordstream.com/wp-content/uploads/2021/07/new-expanded-text-ads-serp-1.png" alt="green iguana" />
                {selectedCard === 0 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Image</h5>
                  <p>lorem</p>
                </div>
              </div>
              <div className={`card ${selectedCard === 1 ? 'selected' : ''}`} onClick={() => handleCardSelect(1)}>
                <img src="https://www.tatango.com/wp-content/uploads/2014/12/SMS-Advertising-Example-From-Bloomingdales.png" alt="green iguana" />
                {selectedCard === 1 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Text</h5>
                  <p>lorem</p>
                </div>
              </div>
              <div className={`card ${selectedCard === 2 ? 'selected' : ''}`} onClick={() => handleCardSelect(2)}>
                <img src="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2015/12/01185143/Top-12-Open-Source-Email-Marketing-Software.jpg" alt="green iguana" />
                {selectedCard === 2 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Video</h5>
                  <p>lorem</p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-container" style={{ marginTop: "20px" }}>
            <button onClick={handleButtonClick}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Res4;
