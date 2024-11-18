import React from "react";
import Navbar from "./Navbar";
import "../styles/Presentation.css";
import ContactForm from "./ContactForm";

const Presentation = () => {
  return (
    <div className="presentation">
      <Navbar />
      <div className="presentation-container">
        <div>
          <h1>MAKALU</h1>
          <p>Gym</p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
