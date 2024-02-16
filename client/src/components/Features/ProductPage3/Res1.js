// Rec.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button"; // Import Button component
import Rec2 from "./Res2";
import Rec3 from "./Res3";
import Rec4 from "./Res4";
import "./Res.css";

const Res1 = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
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

  return (
    <>
      <div className="body">
        <Card className="card1" sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://png.pngtree.com/element_our/md/20180630/md_5b37de3bde2d6.jpg"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Text
            </Typography>
            <Checkbox
              checked={checked1}
              onChange={(e) => setChecked1(e.target.checked)}
            />
          </CardContent>
        </Card>

        <Card className="card1" sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://banner2.cleanpng.com/20180628/ovp/kisspng-google-adwords-pay-per-click-adsense-google-logo-a-google-adwords-banner-5b348665358075.2906855315301689332192.jpg"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              Image
            </Typography>
            <Checkbox
              checked={checked2}
              onChange={(e) => setChecked2(e.target.checked)}
            />
          </CardContent>
        </Card>

        <Card className="card1" sx={{ maxWidth: 300 }}>
          <CardMedia sx={{ height: 140 }} image="kahani.png" />
          <CardContent>
            <Typography variant="h5" component="div">
              Video
            </Typography>
            <Checkbox
              checked={checked3}
              onChange={(e) => setChecked3(e.target.checked)}
            />
          </CardContent>
        </Card>
      </div>

      <div className="button-container">
        <Button variant="contained" onClick={handleButtonClick}>
          Redirect
        </Button>
      </div>
    </>
  );
};

export default Res1;
