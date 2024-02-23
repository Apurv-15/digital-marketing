// Rec2.js

import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import "./Res.css";
import { useNavigate, useLocation } from "react-router-dom";
import { db } from "../../Firebase/firebase.config";
import { collection, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../Auth0/UserAuthContext";

const Res2 = () => {
  const [selectedCard1, setSelectedCard1] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentuser } = useAuth();

  const productName1 = location.state?.productName;
  const locationName1 = location.state?.locationName;
  const budget1 = location.state?.budget;
  const ageGroup1 = location.state?.ageGroup;
  const res1_card_data = location.state?.cardData;

  const handleButtonClick2 = async () => {
    if (selectedCard1 !== null) {
      let cardData1;
      if (selectedCard1 === 0) {
        cardData1 = ""; //enter value of data
      } else if (selectedCard1 === 1) {
        cardData1 = "";
      } else if (selectedCard1 === 2) {
        cardData1 = "";
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

  const handleCardSelect2 = (index) => {
    setSelectedCard1(index);
  };
  return (
    <>
      <div className="body">
        <Card className="card1" sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://www.wordstream.com/wp-content/uploads/2021/07/new-expanded-text-ads-serp-1.png"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Google Ads
            </Typography>
            <Typography>Advertisment</Typography>
          </CardContent>
        </Card>

        <Card className="card1" sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://www.tatango.com/wp-content/uploads/2014/12/SMS-Advertising-Example-From-Bloomingdales.png"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Message
            </Typography>
            <Typography>Advertisment</Typography>
          </CardContent>
        </Card>

        <Card className="card1" sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2015/12/01185143/Top-12-Open-Source-Email-Marketing-Software.jpg"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Email
            </Typography>
            <Typography>Advertisment</Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Res2;
