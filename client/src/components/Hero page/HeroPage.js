import React from "react";
import "./HeroPage.css";
import Lottie from "react-lottie";
import animationData from "../Images and video/animation_lmykgwl4.json";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const HeroPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <section className="showcase">
        <div className="left-text">
          <div>
            <h2>Make a wise Decision Today</h2>
            <h2>Get a website Today for</h2>
            <h2>Better Business</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="button-1">
            <Stack spacing={10} direction="row">
              <Button variant="contained">Schedule Call</Button>
            </Stack>
          </div>
        </div>

        <div className="bg-image">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
