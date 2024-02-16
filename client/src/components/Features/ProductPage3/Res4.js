import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import "./Res.css";

const Res4 = () => {
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
