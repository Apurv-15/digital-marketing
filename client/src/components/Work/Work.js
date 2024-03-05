// import React from "react";
// import "./Work.css";

// const Work = () => {
//   return (
//     <div className="mainpage">
//       <div className="top-bg">
//         <h1 className="h1">Our Work</h1>
//       </div>
//       <div className="rec1">
//         <div className="rec1-text">
//           <h3 className="h3">Photography</h3>
//           <p>
//             Our photography portfolio showcases captivating visuals that bring
//             stories to life. From stunning landscapes to vibrant portraits, our
//             experienced photographers skillfully capture moments that resonate
//             with viewers. Whether it's product photography, event coverage, or
//             lifestyle shots, our portfolio reflects our commitment to
//             creativity, precision, and visual storytelling.
//           </p>
//         </div>
//         <div className="photobg"></div>
//       </div>
//       <hr
//         style={{
//           background: "black",
//           color: " rgb(192, 124, 0)",
//           borderColor: " rgb(192, 124, 0)",
//           height: "1px",
//           width: "700px",
//         }}
//       />
//       <div className="rec2">
//         <div className="rec2-text">
//           <h3 className="h3">Videography</h3>
//           <p>
//             Dive into our videography collection, where every frame tells a
//             story. Through dynamic visuals, compelling narratives, and seamless
//             editing, we transform ideas into impactful videos that captivate
//             audiences. From promotional videos and event highlights to brand
//             documentaries and social media content, our portfolio showcases our
//             expertise in crafting engaging visual experiences that leave a
//             lasting impression.
//           </p>
//         </div>
//         <div className="videobg"></div>
//       </div>
//       <hr
//         style={{
//           background: "black",
//           color: " rgb(192, 124, 0)",
//           borderColor: " rgb(192, 124, 0)",
//           height: "1px",
//           width: "700px",
//         }}
//       />
//       <div className="rec3">
//         <div className="rec3-text">
//           <h3 className="h3">Graphics Designing</h3>
//           <p>
//             Explore our graphics design portfolio, where creativity meets
//             functionality. From eye-catching logos and branding materials to
//             sleek web graphics and print designs, our skilled designers blend
//             artistry with strategy to deliver visually striking solutions. With
//             a keen understanding of client objectives and industry trends, we
//             bring concepts to life with precision, flair, and a touch of
//             innovation.
//           </p>
//         </div>
//         <div className="graphbg"></div>
//       </div>
//       <hr
//         style={{
//           background: "black",
//           color: " rgb(192, 124, 0)",
//           borderColor: " rgb(192, 124, 0)",
//           height: "1px",
//           width: "700px",
//         }}
//       />
//       <div className="images-block">
//         <div className="block1">
//           <div className="img-text1">Photography</div>
//           <div className="img-grid-1">
//             <div className="grid-1-1"></div>
//             <div className="grid-1-2"></div>
//             <div className="grid-1-3"></div>
//             <div className="grid-1-4"></div>
//           </div>
//           <div className="see">
//             <a
//               className="linkuu "
//               href="https://drive.google.com/drive/folders/1vV5J5l6ZMZ3XpzCEXeD8s-rlxFpjKMs8"
//             >
//               see more...
//             </a>
//           </div>
//         </div>
//         <div className="linu">
//           <hr
//             style={{
//               background: "black",
//               color: "black",
//               borderColor: "black",
//               height: "1px",
//               width: "1000px",
//             }}
//           />
//         </div>
//         <div className="block2">
//           <div className="img-text2">Graphics Designing</div>
//           <div className="img-grid-2">
//             <div className="grid-2-1"></div>
//             <div className="grid-2-2"></div>
//             <div className="grid-2-3"></div>
//             <div className="grid-2-4"></div>
//           </div>
//           <div className="see">
//             <a
//               className="linkuu "
//               href="https://drive.google.com/drive/folders/1vV5J5l6ZMZ3XpzCEXeD8s-rlxFpjKMs8"
//             >
//               see more...
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Work.css";

const Work = () => {
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView();
  const controls2 = useAnimation();
  const [ref2, inView2] = useInView();
  const controls3 = useAnimation();
  const [ref3, inView3] = useInView();
  const controls4 = useAnimation();
  const [ref4, inView4] = useInView();

  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    } else {
      controls2.start("hidden");
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    } else {
      controls3.start("hidden");
    }
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) {
      controls4.start("visible");
    } else {
      controls4.start("hidden");
    }
  }, [controls4, inView4]);

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="mainpage">
      <div className="top-bg">
        <h1 className="h1">Our Work</h1>
      </div>
      <motion.div
        ref={ref1}
        variants={sectionVariant}
        initial="hidden"
        animate={controls1}
        className="rec1"
      >
        <div className="rec1-text">
          <h3 className="h3">Photography</h3>
          <p>
            Our photography portfolio showcases captivating visuals that bring
            stories to life. From stunning landscapes to vibrant portraits, our
            experienced photographers skillfully capture moments that resonate
            with viewers. Whether it's product photography, event coverage, or
            lifestyle shots, our portfolio reflects our commitment to
            creativity, precision, and visual storytelling.
          </p>
        </div>
        <div className="photobg"></div>
      </motion.div>
      <hr
        style={{
          background: "black",
          color: " rgb(192, 124, 0)",
          borderColor: " rgb(192, 124, 0)",
          height: "1px",
          width: "700px",
        }}
      />
      <motion.div
        ref={ref2}
        variants={sectionVariant}
        initial="hidden"
        animate={controls2}
        className="rec2"
      >
        <div className="rec2-text">
          <h3 className="h3">Videography</h3>
          <p>
            Dive into our videography collection, where every frame tells a
            story. Through dynamic visuals, compelling narratives, and seamless
            editing, we transform ideas into impactful videos that captivate
            audiences. From promotional videos and event highlights to brand
            documentaries and social media content, our portfolio showcases our
            expertise in crafting engaging visual experiences that leave a
            lasting impression.
          </p>
        </div>
        <div className="videobg"></div>
      </motion.div>
      <hr
        style={{
          background: "black",
          color: " rgb(192, 124, 0)",
          borderColor: " rgb(192, 124, 0)",
          height: "1px",
          width: "700px",
        }}
      />
      <motion.div
        ref={ref3}
        variants={sectionVariant}
        initial="hidden"
        animate={controls3}
        className="rec3"
      >
        <div className="rec3-text">
          <h3 className="h3">Graphics Designing</h3>
          <p>
            Explore our graphics design portfolio, where creativity meets
            functionality. From eye-catching logos and branding materials to
            sleek web graphics and print designs, our skilled designers blend
            artistry with strategy to deliver visually striking solutions. With
            a keen understanding of client objectives and industry trends, we
            bring concepts to life with precision, flair, and a touch of
            innovation.
          </p>
        </div>
        <div className="graphbg"></div>
      </motion.div>
      <hr
        style={{
          background: "black",
          color: " rgb(192, 124, 0)",
          borderColor: " rgb(192, 124, 0)",
          height: "1px",
          width: "700px",
        }}
      />
      <motion.div
        ref={ref4}
        variants={sectionVariant}
        initial="hidden"
        animate={controls4}
        className="images-block"
      >
        <div className="block1">
          <div className="img-text1">Photography</div>
          <div className="img-grid-1">
            <div className="grid-1-1"></div>
            <div className="grid-1-2"></div>
            <div className="grid-1-3"></div>
            <div className="grid-1-4"></div>
          </div>
          <div className="see">
            <a
              className="linkuu "
              href="https://drive.google.com/drive/folders/1vV5J5l6ZMZ3XpzCEXeD8s-rlxFpjKMs8"
            >
              see more...
            </a>
          </div>
        </div>
        <div className="linu">
          <hr
            style={{
              background: "black",
              color: "black",
              borderColor: "black",
              height: "1px",
              width: "1000px",
            }}
          />
        </div>
        <div className="block2">
          <div className="img-text2">Graphics Designing</div>
          <div className="img-grid-2">
            <div className="grid-2-1"></div>
            <div className="grid-2-2"></div>
            <div className="grid-2-3"></div>
            <div className="grid-2-4"></div>
          </div>
          <div className="see">
            <a
              className="linkuu "
              href="https://drive.google.com/drive/folders/1vV5J5l6ZMZ3XpzCEXeD8s-rlxFpjKMs8"
            >
              see more...
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
