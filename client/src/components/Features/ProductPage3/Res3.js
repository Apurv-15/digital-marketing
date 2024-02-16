import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import "./Res.css";

const Res3 = () => {
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
