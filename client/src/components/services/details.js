// import React from "react";
// import "./details.css";

// const Head = () => {
//   return (
//     <div className="head">
//       <div className="h">
//         <h1>Discover the Power of Digital Marketing with Impressive Results</h1>
//         <p>
//           Our digital marketing strategies have helped numerous businesses achieve
//           their goals and boost their online presence.
//         </p>
//       </div>
//     </div>
//   );
// };

// const Stats = () => {
//   return (
   
//     <div className="stats">
//       <div className="stat1">
//         <h2 >50% Growth</h2>
//         <p></p>
//         <p>
//           Increase in Sales and Revenue through Effective Marketing Campaigns
//         </p>
//       </div>
//       <div className="stat2">
//         <h2>50%</h2>
//         <p>Conversion Rate</p>
//         <p>
//           Higher ROI and Customer Engagement with Targeted Marketing Strategies
//         </p>
//       </div>
//     </div>
//   );
// };

// const Testimonial = () => {
//   return (
//     <div className="testimonial">
//       <div className="quote">
//         <p>"Your digital marketing strategies have helped us achieve our goals and boost our online presence. Thank you!"</p>
//         <cite>- John Doe, Acme Corp.</cite>
//       </div>
//     </div>
//   );
// };

// const CallToAction = () => {
//   return (
//     <div className="call-to-action">
//       <div className="cta-button">Get Started</div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="container">
//       <Head />
//       <Stats />
//       <Testimonial />
//       <CallToAction />
//     </div>
//   );
// };

// export default App;

import React from "react";
import "./details.css";

const details = () => {
  return (
    <div className="container12">
      <div className="head">
        <div className="h">
          <h1>Discover the Power of Digital Marketing with Impressive Results</h1>
          <p>
            Our digital marketing strategies have helped numerous businesses achieve
            their goals and boost their online presence.
          </p>
        </div>
       
      </div>
      
      <div className="stats">
      
        <div className="stat1">
        <div className="testimonial">
        <div className="quote">
          <p>"Your digital marketing strategies have helped us achieve our goals and boost our online presence. Thank you!"</p>
          
        </div>
      </div>
          <h2>50% Growth</h2>
          <p>Increase in Sales and Revenue through Effective Marketing Campaigns</p>
        </div>
        <div className="stat2">
          <h2>50%</h2>
          <p>Conversion Rate</p>
          <p>Higher ROI and Customer Engagement with Targeted Marketing Strategies</p>
        </div>
      </div>
      
     
    </div>
  );
};

export default details;
