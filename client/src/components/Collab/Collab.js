import React from "react";
import { Link } from "react-router-dom";
import "./Collab.css";

const Collab = () => {
  return (
    <section className="Contact">
      <div className="topic">Need a developer ?</div>
      <Link to="/contact">
        <div className="title">Let's Collaborate &#8594;</div>
      </Link>
    </section>
  );
};

export default Collab;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Collab.css";
// import Lottie from "react-lottie";
// import animationData from "../../components/Images and video/Animation_for_product1.json";

// const Collab = () => {
//   const lottieOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   return (
//     <section className="Contact">
//       <div className="inner_content123">
//         <Link to="/contact">
//           <div className="title123">
//             <div className="topic123">
//               <h5>Need a developer ?</h5>
//             </div>
//             <h3>Let's Collaborate &#8594;</h3>
//           </div>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Collab;
