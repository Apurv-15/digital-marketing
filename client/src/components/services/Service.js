import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Service.css"; // Import your CSS file
import { Button, CardActionArea,CardMedia, CardActions } from "@mui/material";

import zoro from "../../imagess/zoro.jpeg"

const serviceData = [
  {
    title: "Service 1",
    description: "Description",
    img:{zoro}
  },
  {
    title: "Service 2",
    description: "Description",
  },
  {
    title: "Service 3",
    description: "Description",
  },
  {
    title: "Service 4",
    description: "Description",
  },
  {
    title: "Service 5",
    description: "Description",
  },
  {
    title: "Servicehgkug hkv",
    description: "Description",

  },
];

function Service() {
  return (
    <div className="root">
      <Grid container spacing={3}>
        {serviceData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={zoro}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="p">
                    {service.description}
                    </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  {service.img}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Service;
