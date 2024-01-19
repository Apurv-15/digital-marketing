import React, { useRef, useEffect } from "react";
import "./HeroPage.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const HeroPage = ({ timeline }) => {
  let h2 = useRef(null);
  let pText = useRef(null);

  useEffect(() => {
    timeline.from(
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
    );
  }, [timeline]);

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
              Crafting <span className="orange-text2">Digital </span>
            </h2>
            <h2>Excellence!</h2>
          </div>

          <p ref={(el) => (pText = el)}>
            At Kahanikars, we offer a comprehensive suite of digital marketing
            services designed to elevate your Brand and expand your reach!!
          </p>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" className="custom-button">Contained</Button>
            {/* Add more buttons or components as needed */}
          </Stack>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
