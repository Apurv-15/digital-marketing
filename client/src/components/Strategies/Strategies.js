import React from "react";
import './Strategies.css'
import {
  FaCamera,
  FaCircleNotch,
  FaSearchDollar,
} from "react-icons/fa";
const Strategies = () => {
  const [header] = React.useState({
    mainHeader: "DIGITAL",
    subHeading1: "Transforming business through",
    subHeading3: "effective strategies",
    text:
      "By understanding our clients goals we develop succesfull strategies to get digital business skyrocket!",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "Understanding Your Business and target audience",
      text:
        "we begin by conducting in-depth research to gain insight into your industry and target audience.",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Creating Customized Marketing Strategies.",
      text:
        "Based on the research we develop customized marketing strategies to expand your online presence.",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Implementing and Optimizing Campaigns.",
      text:
        "We excecute strategies and continuosly optimize campaigns to ensure maximum return on investment.",
    }
  ]);
  return (
    <div className="services_122">
      <div className="container_12345">
        <div className="services__header">
          <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">
            <span>{header.subHeading1}</span> <br />
            <span>{header.subHeading3}</span>
          </h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategies;