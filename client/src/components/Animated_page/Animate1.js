// import React, { useEffect, useRef } from 'react';
// import SplitType from 'split-type';
// import { gsap } from 'gsap';
// import './Animate1.css';

// const Animate1 = () => {
//   const h1Ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           animateHeader();
//           observer.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.5 });

//     observer.observe(h1Ref.current);

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   const animateHeader = () => {
//     const headLine = new SplitType(h1Ref.current, { charClass: 'char' });
//     const tl = gsap.timeline({ defaults: { ease: 'Expo.easeInOut' } });

//     tl.from('.char', {
//       y: -100,
//       stagger: 0.05,
//       delay: 1,
//     });
//   };

//   return (
//     <section>
//       <iframe
//         src='https://my.spline.design/untitled-81091ba6f7db7fba14e41a82633b20ca/'
//         frameborder='0'
//         width='100%'
//         height='100%'
//       ></iframe>
//       <h1 ref={h1Ref}>Stop being a crumb</h1>
//       <p>Stand out with ZenRecruiter.</p>
//     </section>
//   );
// };

// export default Animate1;

import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { Application } from "@splinetool/runtime"; // Import Spline runtime
import "./Animate1.css";

const Animate1 = () => {
  const h1Ref = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateHeader();
            loadSplineDesign(); // Load Spline 3D design when the section is in view
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(h1Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateHeader = () => {
    const headLine = new SplitType(h1Ref.current, { charClass: "char" });
    const tl = gsap.timeline({ defaults: { ease: "Expo.easeInOut" } });

    tl.from(".char", {
      y: -100,
      stagger: 0.05,
      delay: 1,
    });
  };

  // const loadSplineDesign = () => {
  //   const app = new Application(canvasRef.current);
  //   app.load("https://prod.spline.design/iKbKlaDFSCu-MDIe/scene.splinecode");
  // };

  return (
    <section>
      {/* <canvas id="canvas3d" ref={canvasRef} width="100%" height="100%"></canvas> */}
      <h1 className="head1" ref={h1Ref}>Stop being a crumb</h1>
      <p className="para1">Stand out with ZenRecruiter.</p>
    </section>
  );
};

export default Animate1;
