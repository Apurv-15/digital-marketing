import React from "react";
import "./Connect.css";

const Connect = () => {
  return (
    <div className="page-123">
      <div className="head-123">
        <h1 className="h-text-123">Connect With Us</h1>
        <p className="p-text-123">
          We'd love to hear from you. Get it touch with us today!
        </p>
      </div>
      <div className="body-123">
        <div className="sub-body-123">
          <div className="email-123">
            <div className="e-icon-123"></div>
            <h3 className="sub-head-123">Email</h3>
            <p className="p-text1-123">Send us and email</p>
            <p className="link">
              <a className="linku-123" href="mailto:iamtherealsujith@gmail.com">
                iamtherealsujith@gmail.com
              </a>
            </p>
          </div>
          <div className="phone-123">
            <div className="p-icon-123"></div>
            <h3 className="sub-head-123">Phone</h3>
            <p className="p-text1-123">Call us today</p>
            <p className="link">
              <a className="linku-123" href="tel:+91 86058 50940">
                +91 86058 50940
              </a>
            </p>
          </div>
        </div>
        <div className="big-pic-123"></div>
      </div>
    </div>
  );
};

export default Connect;
