// import React, { useEffect, useRef } from "react";
// import SplitType from "split-type";
// import { gsap } from "gsap";
// import { Application } from "@splinetool/runtime";
// import "./Animate1.css";

// const Animate2 = () => {
//   const h1Ref = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             animateHeader();
//             loadSplineDesign();
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     observer.observe(h1Ref.current);

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   const animateHeader = () => {
//     const headLine = new SplitType(h1Ref.current, { charClass: "char" });
//     const tl = gsap.timeline({ defaults: { ease: "Expo.easeInOut" } });

//     tl.from(".char", {
//       y: -100,
//       stagger: 0.05,
//       delay: 1,
//     });
//   };

//   const loadSplineDesign = () => {
//     const app = new Application(canvasRef.current);
// //     app.load("https://prod.spline.design/p3DV-DAFyQuPoChl/scene.splinecode");
// //   };
//   app.load("https://prod.spline.design/PYJvt2v9DZhqTxtX/scene.splinecode");
// };
//   return (
//     <section style={{ textAlign: "center", marginTop: "50vh" }}>
//       <h1 ref={h1Ref}>Stop being a crumb</h1>
//       <canvas id="canvas3d" ref={canvasRef} width="100%" height="100%"></canvas>
//       <p>Stand out with ZenRecruiter.</p>
//     </section>
//   );
// };

// export default Animate2;


// import React, { useEffect } from 'react';
// import { Application } from '@splinetool/runtime';

// import './Animate1.css'; // Import CSS file

// const Animate2 = () => {
//   useEffect(() => {
//     const canvas = document.getElementById('canvas3d');
//     const app = new Application(canvas);
//     app.load('https://prod.spline.design/9Q9lyzPQewaZ3OTL/scene.splinecode');

//     // Clean up the Spline runtime when the component unmounts
//     return () => {
//       app.destroy();
//     };
//   }, []);

//   return (
//     <div className="spline-canvas-container">
//       <canvas id="canvas3d" className="spline-canvas"></canvas>
//     </div>
//   );
// };

// export default Animate2;

