// Res1.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import "./Res.css";

const Res1 = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (checked1) {
      navigate("/res2", { replace: true });
    } else if (checked2) {
      navigate("/rec3", { replace: true });
    } else if (checked3) {
      navigate("/rec4", { replace: true });
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
              <Card
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "11rem",
                  height: "12rem",
                  margin: "0 1rem", // Adjusted margin for space between cards
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
                      lorem
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

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
                      lorem
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

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
                      lorem
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
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
