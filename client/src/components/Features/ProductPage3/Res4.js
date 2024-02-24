import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import { db } from "../../Firebase/firebase.config";
import { collection, doc, setDoc } from "firebase/firestore";
import "./Res.css";
import { useAuth } from "../../Auth0/UserAuthContext";

const Res4 = () => {
  const [selectedCard4, setSelectedCard4] = useState(null);
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
      <div className="body">
        <Card className="card1" sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://www.wordstream.com/wp-content/uploads/2021/07/new-expanded-text-ads-serp-1.png"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Youtube
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
              Custom Videography
            </Typography>
            <Typography>Advertisment</Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Res4;
