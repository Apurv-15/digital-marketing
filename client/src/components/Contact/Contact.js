import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const initialForm = {
    name: "",
    email: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialForm);
  const { name, email, message } = formState;
  const [buttonMessage, setButtonMessage] = useState("Send Message");
  const [loading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false); // State to control toast visibility

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formState);
    setTimeout(() => {
      setIsLoading(false);
      setFormState(initialForm);
      setShowToast(true); // Show the toast after message is sent
      setTimeout(() => {
        setShowToast(false); // Hide the toast after a certain duration
      }, 3000); // Adjust duration as needed
    }, 1000);
  };

  const onchange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="service-top">
      <div className="title">
        <h2>Get in Touch!</h2>
      </div>
      <div className="sub">
        Got a question, proposal, project, or want to work <br /> together on
        something? Feel free to reach out.
      </div>
      <form onSubmit={onSubmit} className="form_con">
        <div className="input-row">
          <div className="side">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              placeholder="What's Your Name?"
              name="name"
              required
              value={name}
              onChange={onchange}
            />
          </div>
          <div className="side">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              placeholder="What's Your Email?"
              name="email"
              required
              value={email}
              onChange={onchange}
            />
          </div>
        </div>
        <div className="textarea">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            placeholder="Hello, I think we need you to work on/collaborate on this particular product... React as soon as possible!"
            name="message"
            required
            value={message}
            onChange={onchange}
          />
        </div>
        <div className="butt">
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : buttonMessage}
          </button>
        </div>
      </form>
      {showToast && <div className="toast">Message Sent!</div>} {/* Toast */}
    </div>
  );
};

export default Contact;
