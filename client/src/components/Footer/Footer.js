import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-light">
      <div className="container">
        <div className="footer-wrapper-two">
          <a href="#" className="footer-brand w-inline-block">
            <img
              src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a332512aaee_placeholder-1.svg"
              loading="lazy"
              alt=""
            />
          </a>
          <div className="footer-block-two">
            <div className="footer-title">Company</div>
            <a href="#" className="footer-link-two">
              How it works
            </a>
            <a href="#" className="footer-link-two">
              Pricing
            </a>
            <a href="#" className="footer-link-two">
              Docs
            </a>
          </div>
          <div className="footer-block-two">
            <div className="footer-title">Quick Link</div>
            <a href="#" className="footer-link-two">
              Pricing
            </a>
            <a href="#" className="footer-link-two">
              Resources
            </a>
          </div>
        </div>
        <div className="footer-divider-two"></div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2022 Company name. All rights reserved
          </div>
          <div className="footer-social-block-two">
            <a href="#" className="footer-social-link w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ac76f12aaec_product%20icon-2.svg"
                loading="lazy"
                alt=""
              />
            </a>
            <a href="#" className="footer-social-link w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a4a9512aae0_product%20icon-1.svg"
                loading="lazy"
                alt=""
              />
            </a>
            <a href="#" className="footer-social-link w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a853712aad7_product%20icon.svg"
                loading="lazy"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
