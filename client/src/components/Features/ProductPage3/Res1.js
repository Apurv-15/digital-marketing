import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { setDoc } from "firebase/firestore";
import "./Res.css";

const Res1 = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  

  const productName = location.state?.productName;
  const locationName = location.state?.locationName;
  const ageGroup = location.state?.ageGroup;
  const budget = location.state?.budget;

  const handleButtonClick = async () => {
    if (selectedCard !== null) {
      var cardData;
      if (selectedCard === 0) {
        cardData = "Image";
      } else if (selectedCard === 1) {
        cardData = "Text";
      } else if (selectedCard === 2) {
        cardData = "Video";
      }

      try {
        // Now, navigate to the next page
        if (selectedCard === 0) {
          navigate("/res2", {
            replace: true,
            state: { cardData, productName, locationName, ageGroup, budget },
          });
        } else if (selectedCard === 1) {
          navigate("/res3", {
            replace: true,
            state: { cardData, productName, locationName, ageGroup, budget },
          });
        } else if (selectedCard === 2) {
          navigate("/res4", {
            replace: true,
            state: { cardData, productName, locationName, ageGroup, budget },
          });
        }
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  };

  const handleCardSelect = (index) => {
    setSelectedCard(index);
  };
  return (
    <>
      <div className="body_1">
        <form action="javascript:void(0)">
          <fieldset>
            <legend>Enter Product information</legend>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "left",
                marginLeft: "3.9rem",
                marginTop: "0.1rem",
                padding: "0.1rem",
              }}
            >
              {/* Card 1 */}
              <Card
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "11rem",
                  height: "12rem",
                  margin: "0 1rem",
                  border: selectedCard === 0 ? ".1rem solid green" : "none",
                }}
              >
                <CardActionArea onClick={() => handleCardSelect(0)}>
                  <div style={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="110"
                      image="https://i.natgeofe.com/n/5506954d-6e0f-444c-aa83-a24adbe874e1/reptiles-hero_4x3.jpg"
                      alt="green iguana"
                    />
                    {selectedCard === 0 && (
                      <IconButton
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          backgroundColor: "white",
                        }}
                        size="small"
                      >
                        <CheckCircleIcon sx={{ color: "green" }} />
                      </IconButton>
                    )}
                  </div>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign="center"
                    >
                      Image
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center" }}
                    >
                      Lorem Ipsum
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              {/* Card 2 */}
              <Card
                sx={{
                  width: "11rem",
                  height: "12rem",
                  margin: "0 0.5rem",
                  border: selectedCard === 1 ? ".1rem solid green" : "none",
                }}
              >
                <CardActionArea onClick={() => handleCardSelect(1)}>
                  <div style={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="110"
                      image="https://i.natgeofe.com/n/5506954d-6e0f-444c-aa83-a24adbe874e1/reptiles-hero_4x3.jpg"
                      alt="green iguana"
                    />
                    {selectedCard === 1 && (
                      <IconButton
                        sx={{
                          position: "absolute",
                          top: 8,
                          right: 8,
                          backgroundColor: "white",
                        }}
                        size="small"
                      >
                        <CheckCircleIcon sx={{ color: "green" }} />
                      </IconButton>
                    )}
                  </div>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign="center"
                    >
                      Text
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center" }}
                    >
                      Lorem Ipsum
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              {/* Card 3 */}
              <Card
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "11rem",
                  height: "12rem",
                  margin: "0 0.5rem",
                  border: selectedCard === 2 ? ".1rem solid green" : "none",
                }}
              >
                <CardActionArea onClick={() => handleCardSelect(2)}>
                  <div style={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="110"
                      image="https://i.natgeofe.com/n/5506954d-6e0f-444c-aa83-a24adbe874e1/reptiles-hero_4x3.jpg"
                      alt="green iguana"
                    />
                    {selectedCard === 2 && (
                      <IconButton
                        sx={{
                          position: "absolute",
                          top: 2,
                          right: 8,
                          backgroundColor: "white",
                        }}
                        size="small"
                      >
                        <CheckCircleIcon sx={{ color: "green" }} />
                      </IconButton>
                    )}
                  </div>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      textAlign="center"
                    >
                      Video
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ textAlign: "center" }}
                    >
                      Lorem Ipsum
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>

            {/* Button Container */}
            <div className="button-container" style={{ marginTop: "20px" }}>
              <Button variant="contained" onClick={handleButtonClick}>
                Next
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Res1;
