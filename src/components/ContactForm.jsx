"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          alert("Mensaje enviado exitosamente!");
        },
        (error) => {
          alert("Hubo un error, intenta nuevamente.");
        }
      );

    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <input
        type="text"
        id="user_name"
        name="user_name"
        placeholder="Nombre *"
        required
      />

      <input
        type="email"
        id="user_email"
        name="user_email"
        placeholder="Correo Electrónico *"
        required
      />
      <label htmlFor="user_phone"></label>
      <input
        type="tel"
        id="user_phone"
        name="user_phone"
        placeholder="Número de Teléfono *"
        required
      />
      <label htmlFor="message">Mensaje:</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Mensaje"
        required
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
