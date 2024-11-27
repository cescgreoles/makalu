"use client";

import React, { useState } from "react";
import "../styles/Prices.css";

const Prices = () => {
  const [activeState, setActiveState] = useState("ENTRENAMIENTO PERSONAL");

  const content = {
    "ENTRENAMIENTO PERSONAL": (
      <p>
        Ofrecemos sesiones personalizadas para mejorar tu rendimiento físico y
        alcanzar tus metas. Trabaja con entrenadores especializados que te
        acompañarán en cada paso de tu progreso.
      </p>
    ),
    FISIOTERAPIA: (
      <p>
        Contamos con un box de fisioterapia totalmente equipado para ayudarte a
        prevenir lesiones, recuperarte y mantener tu cuerpo en óptimas
        condiciones.
      </p>
    ),
    "PLANES NUTRICIONALES": (
      <p>
        Diseñamos planes nutricionales a medida, adaptados a tus objetivos,
        estilo de vida y necesidades específicas. ¡Alcanza tu mejor versión
        desde adentro hacia afuera!
      </p>
    ),
  };

  return (
    <div className="prices">
      <div className="state-buttons">
        {Object.keys(content).map((state) => (
          <button
            key={state}
            className={`state-button ${activeState === state ? "active" : ""}`}
            onClick={() => setActiveState(state)}
          >
            <h2>{state}</h2>
          </button>
        ))}
      </div>

      <div className="state-content">{content[activeState]}</div>
    </div>
  );
};

export default Prices;
