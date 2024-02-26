import React, { useRef, useEffect } from "react";
import "./HeroPage.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./Image/Image.css";
import { useNavigate } from "react-router-dom";

const HeroPage = ({ timeline, ease }) => {
  const navigate = useNavigate();
  let h2 = useRef(null);
  let pText = useRef(null);
  let image1 = useRef(null);
  let image2 = useRef(null);
  let image3 = useRef(null);

  useEffect(() => {
    timeline
      .from(
        [h2.children, pText],
        1,
        {
          opacity: 0,
          y: "100",
          skewY: 10,
          stagger: {
            amount: 0.4,
          },
        },
        "-=1"
      )
      .from(
        image1,
        1.2,
        {
          y: 1200,
          ease: ease,
          opacity: 0,
        },
        "-=1"
      )
      .from(
        image1,
        2,
        {
          scale: 1.6,
          ease: ease,
        },
        "-=1.2"
      )
      .from(
        image2,
        1.2,
        {
          y: 1200,
          ease: ease,
          opacity: 0,
        },
        "-=1"
      )
      .from(
        image2,
        2,
        {
          scale: 1.6,
          ease: ease,
        },
        "-=1"
      )
      .from(
        image3,
        1.2,
        {
          y: 1200,
          ease: ease,
          opacity: 0,
        },
        "-=1"
      )
      .from(
        image3,
        2,
        {
          scale: 1.6,
          ease: ease,
        },
        "-=1"
      );
  }, [timeline, ease]);

  const handleButtonClick = () => {
    navigate("/productadd");
  };

  return (
    <div>
      <section className="showcase">
        <div className="left-text">
          <div ref={(el) => (h2 = el)}>
            , .
            <h2>
              <span className="orange-text1">Elevating </span>Experiences
            </h2>
            <h2>
              Crafting <span className="orange-text1">Digital </span>
            </h2>
            <h2>
              <span className="orange-text1">Business </span>Excellence!
            </h2>
          </div>

          <p ref={(el) => (pText = el)}>
            At Kahanikars, we offer a comprehensive suite of digital marketing
            services designed to elevate your Brand and expand your reach!!
          </p>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={handleButtonClick}
              className="custom-button"
            >
              Get started
            </Button>
            {/* Add more buttons or components as needed */}
          </Stack>
        </div>
        <div className="images">
          <div className="box1" ref={(el) => (image1 = el)}></div>
          <div className="box2" ref={(el) => (image2 = el)}></div>
          <div className="box3" ref={(el) => (image3 = el)}></div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
