import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Service.css"; // Import your CSS file

const serviceData = [
  {
    title: "Service 1",
    description: "Description",
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
    title: "Service 6",
    description: "Description",
  },
];

function Service() {
  return (
    <div className="root">
      <Grid container spacing={3}>
        {serviceData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="card">
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Service;
