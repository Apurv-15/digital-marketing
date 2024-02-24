import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Res1234.css';

const Res1 = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (selectedCard === 0) {
      navigate("/res2", { replace: true });
    } else if (selectedCard === 1) {
      navigate("/res3", { replace: true });
    } else if (selectedCard === 2) {
      navigate("/res4", { replace: true });
    }
  };

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };

  return (
    <>
      <div className="section1_1111">
        <div className="container-111">
          <div className="components-111">
            <div className="comp_111">
              <div className={`card ${selectedCard === 0 ? 'selected' : ''}`} onClick={() => handleCardSelect(0)}>
                <img src="https://tecnosoluciones.com/wp-content/uploads/2023/05/publicidad-digital-con-facebook-ads.png" alt="green iguana" />
                {selectedCard === 0 && <div className="check-icon"></div>}
                <div className="card-content">
                  <h5>Image</h5>
                  <p>lorem</p>
                </div>
              </div>
              <div className={`card ${selectedCard === 1 ? 'selected' : ''}`} onClick={() => handleCardSelect(1)}>
                <img src="https://static.semrush.com/blog/uploads/media/3b/1c/3b1c0ca3c9501eb49602f786f2745f32/social-media-ads.svg" alt="green iguana" />
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

export default Res1;
