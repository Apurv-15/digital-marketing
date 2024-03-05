import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import emailjs from "emailjs-com";
import Lottie from "react-lottie";
import animationData from "../../Images and video/Animation_for_tick.json";
import "./Thank.css";

const Thank = () => {
  const { user } = useAuth0();
  const userEmail = user?.email;
  const navigate = useNavigate();
  const location = useLocation();
  const productName1 = location.state?.productName1;

  // State to store the unique ID
  const [uniqueId, setUniqueId] = useState("");

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    // Generate a unique ID when the component mounts
    const newUniqueId = uuidv4();
    setUniqueId(newUniqueId);

    // Send email to the logged-in user
    sendEmailToUser(newUniqueId);

    // Send email to only one employee
    sendEmailToEmployee(newUniqueId);
  }, [productName1]);

  const sendEmailToUser = (id) => {
    emailjs.send(
      "service_b9ht1hm",
      "template_oh5b2vb",
      {
        to_email: userEmail,
        subject: "Form Received Successfully",
        formDetails: JSON.stringify({ ...location.state, uniqueId: id }),
      },
      "fSP2NIQDYYWgwswIt"
    );
  };

  const sendEmailToEmployee = (id) => {
    const employeeEmails = ["employee1@example.com"];

    const randomIndex = Math.floor(Math.random() * employeeEmails.length);
    // const selectedEmployeeEmail = employeeEmails[randomIndex];
    const selectedEmployeeEmail = employeeEmails[0];

    emailjs.send(
      "service_b9ht1hm",
      "template_zck1g2p",
      {
        to_email: selectedEmployeeEmail,
        subject: "New Form Submission",
        formDetails: JSON.stringify({ ...location.state, uniqueId: id }),
      },
      "fSP2NIQDYYWgwswIt"
    );
  };

  const handleButtonClick2 = () => {
    navigate("/productadd", { state: { productName1 } });
  };
  const handleButtonClick1 = () => {
    navigate("/");
  };

  return (
    <div className="outer">
      <div className="inner">
        <div className="inner-content">
          <div className="success-message">
            <div className="lottie_animate">
              <Lottie
                options={lottieOptions}
                height={490}
                width={400}
                //   marginTop={10}
              />
            </div>
            <h1 className="title">Your Form Received Successfully</h1>
            <div className="title1">
              <p>We will respond in approximately 24 Hour</p>
              <div className="button-container12">
                <button onClick={handleButtonClick1}>Home Page</button>
                <button onClick={handleButtonClick2}>View Your Products</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Thank;
