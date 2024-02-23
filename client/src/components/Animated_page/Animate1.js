import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "./UseOnScreen";
import cn from "classnames";

import "./Animate1.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
];

function GalleryItem({ src, category, subtitle, title }) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      gsap.to(ref.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }, [onScreen]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
      style={{ opacity: 0, y: 50 }}
    >
      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
}

export default function Animate1() {
  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        start: "top 70%", // Adjust the start value as needed
        trigger: ref.current,
        scroller: "#main-container",
      },
    });
  }, []);

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">
      <div className="gallery" ref={ref}>
        {images.map((image, index) => (
          <GalleryItem key={index} {...image} />
        ))}
      </div>
    </section>
  );
}
