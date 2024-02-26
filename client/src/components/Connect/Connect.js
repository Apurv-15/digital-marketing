import React from "react";
import "./Connect.css";

const Connect = () => {
  return (
    <div className="page">
      <div className="head">
        <h1 className="head-text">Connect With Us</h1>
        <p className="p-text">
          We'd love to hear from you. Get it touch with us today!
        </p>
      </div>
      <div className="body">
        <div className="sec">
          <div className="email"></div>
          <h3 className="sub-head">Email</h3>
          <p className="p-text">Send us an email</p>
          <p className="link">
            <a  className="linku" href="mailto:iamtherealsujith@gmail.com">
              iamtherealsujith@gmail.com
            </a>
          </p>
          <div className="phone" ></div>
          <h3 className="sub-head">Phone</h3>
          <p className="p-text">Call us today</p>
          <p className="link">
            <a className="linku" href="tel:+91 86058 50940">+91 86058 50940</a>
          </p>
        </div>
        <div className="big-pic" ></div>
      </div>
    </div>
  );
};

export default Connect;
