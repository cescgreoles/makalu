import React from "react";
import Navbar from "./Navbar";
import "../styles/Presentation.css";
import ContactForm from "./ContactForm";

const Presentation = () => {
  return (
    <div className="presentation">
      <Navbar />
      <div className="presentation-container">
        <div className="presentation-text">
          <p>CENTRO DE ENTRENAMIENTO Y SALUD</p>
          <h1>EMPIEZA TU CAMINO HACIA UNA VIDA MÁS SALUDABLE</h1>
          <text className="text-presentation">
            NOS ESFORZAMOS POR FOMENTAR UN ESTILO DE VIDA ACTIVO Y PROMOVER
            BUENOS HÁBITOS EN ÁREAS COMO ALIMENTACIÓN, LA POSTURA, LA ACTIVIDAD
            FÍSICA Y EL DESCANSO
          </text>
        </div>
        <div className="presentation-form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
