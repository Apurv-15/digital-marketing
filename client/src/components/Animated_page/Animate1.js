import React from "react";

function PromoSection() {
  return (
    <section className="promo-section">
      <div className="content-container">
        <PromoContent />
        <PromoImage />
      </div>
      <style jsx>{`
        .promo-section {
          display: flex;
          flex-direction: column;
          position: relative;
          background-color: rgba(0, 0, 0, 1);
          padding: 24px;
        }
        .content-container {
          gap: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .content-container {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .promo-title {
          text-align: center;
          font-size: 32px;
          color: #ffffff;
        }
        @media (max-width: 640px) {
          .promo-title {
            font-size: 25px;
          }
        }
        .promo-subtitle {
          margin-top: 8px;
          text-align: center;
          font-size: 16px;
          color: #e1e1e1;
        }
        @media (max-width: 640px) {
          .promo-subtitle {
            font-size: 15px;
          }
        }
        .promo-button {
          margin-left: 80px;
          background-color: #006ce9;
          color: white;
          border-radius: 4px;
          text-align: center;
          padding: 15px 31px;
          margin: 26px auto 0;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .promo-button {
            margin: 0 auto;
          }
        }
        .image-wrapper {
          width: 100%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .image-wrapper {
            width: 100%;
            margin-left: 0;
          }
        }
        .promo-image {
          aspect-ratio: 1.5;
          object-fit: cover;
          object-position: center;
          width: 100%;
          text-align: center;
          height: auto;
        }
      `}</style>
    </section>
  );
}

function PromoContent() {
  return (
    <div className="promo-content">
      <h2 className="promo-title">Something Great to Say</h2>
      <p className="promo-subtitle">
        Some more great things to elaborate on that wonderful things you have to
        tell your audience
      </p>
      <button className="promo-button">Let's go</button>
    </div>
  );
}

function PromoImage() {
  return (
    <div className="image-wrapper">
      <img
        loading="lazy"
        sizes="(max-width: 638px) 100vw, 42vw"
        src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F76291e61229947c19bbfc9583f316f8f"
        alt="Promotional content"
        className="promo-image"
      />
    </div>
  );
}

export default PromoSection;
