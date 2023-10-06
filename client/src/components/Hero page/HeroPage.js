import React from "react";
import "./HeroPage.css";
import Lottie from "react-lottie";
import animationData from "../Images and video/animation_lmykgwl4.json";

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
            <h2><span className="orange-text1">Digital</span> Marketing:</h2>
            <h2>Elevate Your <span className="orange-text2">Brand</span>, Expand</h2>
            <h2>Your Reach!</h2>
            <h2>Better <span className="orange-text3">Business</span>!</h2>
          </div>
          <p>
          At <span className="orange-text4">Kahanikars</span>, we offer a comprehensive suite of digital marketing services designed to elevate your <span className="orange-text5">Brand</span> and expand your <span className="orange-text6">reach</span>!!
          </p>
          <button className="button-1">LET'S TALK</button>
          </div>

        <div className="bg-image">
          <Lottie options={defaultOptions} height={480} width={498} />
        </div>
      </section>
    </div>
  );
};

export default HeroPage;
