import React from "react";
import Lottie from "react-lottie";
import animationData from "../Images and video/animation_lnfo_page.json";
import "./Info.css";
export const Info = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container">
      <div className="head-text">
        <h1>
          <span className="yellow-text1">A User Friendly </span>
          Theme Built With
          <span className="orange-text2"> Usability</span> In Mind
        </h1>
        <p>
          Every project is different and so should the process be. We’ll define
          a clear framework of how we communicate, exchange feedback and
          effectively work together.
        </p>
      </div>

      <div className="bottom-text">
        {/* <h2>Build Your Website to the Ultimate Level with Kahanikars</h2>
        <p>
          Every project is different and so should the process be. We’ll define
          a clear framework of how we communicate, exchange feedback and
          effectively work together.
        </p> */}
        <div className="bg-image2">
          <Lottie options={defaultOptions} height={480} width={498} />
        </div>
      </div>
    </div>
  );
};
