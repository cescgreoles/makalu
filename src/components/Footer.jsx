import React from "react";
import { FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";
import ContactForm from "./ContactForm";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <ContactForm />
      </div>
      <div className="section-contact">
        <h1>CONTACTO</h1>
        <div className="icons">
          <div className="section-icon">
            <FaEnvelope size={20} />

            <p>makalufitness@gmail.com</p>
          </div>
          <div className="section-icon">
            <FaPhone size={20} className="icon-footer" />
            <p>672590121</p>
          </div>
          <div className="section-icon">
            <FaInstagram size={20} />
            <p>@makalu.fitness</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
