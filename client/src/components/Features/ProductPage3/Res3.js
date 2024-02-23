import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate, useLocation } from "react-router-dom";
import { db } from "../../Firebase/firebase.config";
import { collection, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../Auth0/UserAuthContext";


import "./Res.css";

const Res3 = () => {
  const [selectedCard1, setSelectedCard1] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentuser } = useAuth();

  const productName1 = location.state?.productName;
  const locationName1 = location.state?.locationName;
  const budget1 = location.state?.budget;
  const ageGroup1 = location.state?.ageGroup;
  const res1_card_data = location.state?.cardData;

  const handleButtonClick1 = async () => {
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
          //add carddata4

        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="body">
        <Card className="card1" sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://tecnosoluciones.com/wp-content/uploads/2023/05/publicidad-digital-con-facebook-ads.png"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Custom Photography
            </Typography>
            <Typography>Advertisment</Typography>
          </CardContent>
        </Card>

        <Card className="card1" sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://static.semrush.com/blog/uploads/media/3b/1c/3b1c0ca3c9501eb49602f786f2745f32/social-media-ads.svg"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Instagram
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
              facebook ads
            </Typography>
            <Typography>Advertisment</Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Res3;
