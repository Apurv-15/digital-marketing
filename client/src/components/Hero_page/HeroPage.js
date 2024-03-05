import React, { useRef, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Application } from "@splinetool/runtime";
import "./HeroPage.css";

// import "./Image/Image.css";

const HeroPage = ({ timeline, ease }) => {
  const navigate = useNavigate();
  const h2Ref = useRef(null);
  const pTextRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const animationTimeline = timeline || gsap.timeline();
    const animationEase = ease || "power3.out";

    animationTimeline
      .from(
        [h2Ref.current.children, pTextRef.current],
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
        [canvasRef.current],
        1.2,
        {
          y: 1200,
          ease: animationEase,
          opacity: 0,
        },
        "-=1"
      )
      .from(
        [canvasRef.current],
        2,
        {
          scale: 1.6,
          ease: animationEase,
        },
        "-=1.2"
      );
  }, [timeline, ease]);

  const handleButtonClick = () => {
    navigate("/productadd");
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load("https://prod.spline.design/hEdy2aI4pq6hGDBu/scene.splinecode");
  }, []);

  return (
    <div>
      <section className="showcase">
        <div className="inner_content12">
          <div className="left-text">
            <div ref={h2Ref}>
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

            <p ref={pTextRef}>
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
            <canvas className="spline-canvas" ref={canvasRef}></canvas>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage;

// import React, { useRef, useEffect } from "react";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
// import gsap from "gsap";
// import "./HeroPage.css";
// import "./Image/Image.css";

// const HeroPage = ({ timeline, ease }) => {
//   const navigate = useNavigate();
//   const h2Ref = useRef(null);
//   const pTextRef = useRef(null);
//   const image1Ref = useRef(null);
//   const image2Ref = useRef(null);
//   const image3Ref = useRef(null);

//   useEffect(() => {
//     const animationTimeline = timeline || gsap.timeline();
//     const animationEase = ease || "power3.out";

//     animationTimeline
//       .from(
//         [h2Ref.current.children, pTextRef.current],
//         1,
//         {
//           opacity: 0,
//           y: "100",
//           skewY: 10,
//           stagger: {
//             amount: 0.4,
//           },
//         },
//         "-=1"
//       )
//       .from(
//         [image1Ref.current, image2Ref.current, image3Ref.current],
//         1.2,
//         {
//           y: 1200,
//           ease: animationEase,
//           opacity: 0,
//         },
//         "-=1"
//       )
//       .from(
//         [image1Ref.current, image2Ref.current, image3Ref.current],
//         2,
//         {
//           scale: 1.6,
//           ease: animationEase,
//         },
//         "-=1.2"
//       );
//   }, [timeline, ease]);

//   const handleButtonClick = () => {
//     navigate("/productadd");
//   };

//   return (
//     <div>
//       <section className="showcase">
//         <div className="left-text">
//           <div ref={h2Ref}>
//             , .
//             <h2>
//               <span className="orange-text1">Elevating </span>Experiences
//             </h2>
//             <h2>
//               Crafting <span className="orange-text1">Digital </span>
//             </h2>
//             <h2>
//               <span className="orange-text1">Business </span>Excellence!
//             </h2>
//           </div>

//           <p ref={pTextRef}>
//             At Kahanikars, we offer a comprehensive suite of digital marketing
//             services designed to elevate your Brand and expand your reach!!
//           </p>
//           <Stack direction="row" spacing={2}>
//             <Button
//               variant="contained"
//               onClick={handleButtonClick}
//               className="custom-button"
//             >
//               Get started
//             </Button>
//             {/* Add more buttons or components as needed */}
//           </Stack>
//         </div>
//         <div className="images">
//           <div className="box1" ref={image1Ref}></div>
//           <div className="box2" ref={image2Ref}></div>
//           <div className="box3" ref={image3Ref}></div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroPage;
