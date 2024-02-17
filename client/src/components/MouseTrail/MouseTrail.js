// MouseTrail.js
import React, { useEffect, useRef } from "react";
import "./MouseTrail.css";

const Dot = function () {
  this.x = 0;
  this.y = 0;
  this.node = (function () {
    var n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  })();
};

Dot.prototype.draw = function () {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

const MouseTrail = () => {
  const dots = useRef([]);

  useEffect(() => {
    for (let i = 0; i < 12; i++) {
      const d = new Dot();
      dots.current.push(d);
    }

    const draw = () => {
      var x = mouse.x,
        y = mouse.y;

      dots.current.forEach(function (dot, index, dots) {
        var nextDot = dots[index + 1] || dots[0];

        dot.x = x;
        dot.y = y;
        dot.draw();
        x += (nextDot.x - dot.x) * 0.6;
        y += (nextDot.y - dot.y) * 0.6;
      });
    };

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      mouse.x = event.pageX;
      mouse.y = event.pageY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    animate();

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      dots.current.forEach((dot) => {
        // Remove the trail dots from the DOM
        document.body.removeChild(dot.node);
      });
    };
  }, []);

  const mouse = {
    x: 0,
    y: 0,
  };

  return null;
};

export default MouseTrail;
