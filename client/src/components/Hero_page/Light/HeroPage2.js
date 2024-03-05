import React, { useEffect } from "react";
import { Application } from "@splinetool/runtime";

const HeroPage2 = () => {
  useEffect(() => {
    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas);

    if (canvas) {
      app.load("https://prod.spline.design/AePKV3QJGPdLk0hW/scene.splinecode");
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <canvas id="canvas3d" style={{ width: "100%", height: "100%" }}></canvas>
    </div>
  );
};

export default HeroPage2;
