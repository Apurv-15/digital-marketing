import React from "react";
import "./Work.css";

const Work = () => {
  return (
    <div className="mainpage">
      <div className="top-bg">
        <h1 className="h1">Our Work</h1>
      </div>
      <div className="rec1">
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
      </div>
      <hr
        style={{
          background: "black",
          color: "black",
          borderColor: "black",
          height: "1px",
          width: "700px",
        }}
      />
      <div className="rec2">
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
      </div>
      <hr
        style={{
          background: "black",
          color: "black",
          borderColor: "black",
          height: "1px",
          width: "700px",
        }}
      />
      <div className="rec3">
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
      </div>
      <hr
        style={{
          background: "black",
          color: "black",
          borderColor: "black",
          height: "1px",
          width: "700px",
        }}
      />
      <div className="images-block">
        <div className="block1">
          <div className="img-text1">
            Photography
            <hr
              style={{
                background: "black",
                color: "black",
                borderColor: "black",
                height: "1px",
                width: "700px",
              }}
            />
          </div>
          <div className="img-grid-1">
            <div className="grid-1-1"></div>
            <div className="grid-1-2"></div>
            <div className="grid-1-3"></div>
            <div className="grid-1-4"></div>
          </div>
          <div className="see"><a className="linkuu " href="https://drive.google.com/drive/folders/1vV5J5l6ZMZ3XpzCEXeD8s-rlxFpjKMs8">see more...</a></div>
        </div>
        <div className="block2">
          <div className="img-text2">
            Graphics Designing
            <hr
              style={{
                background: "black",
                color: "black",
                borderColor: "black",
                height: "1px",
                width: "600px",
              }}
            />
          </div>
          <div className="img-grid-2">
            <div className="grid-2-1"></div>
            <div className="grid-2-2"></div>
            <div className="grid-2-3"></div>
            <div className="grid-2-4"></div>
          </div>
          <div className="see"><a className="linkuu " href="https://drive.google.com/drive/folders/1vV5J5l6ZMZ3XpzCEXeD8s-rlxFpjKMs8">see more...</a></div>
        </div>
      </div>
    </div>
  );
};

export default Work;
