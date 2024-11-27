"use client";

import React from "react";
import { usePathname } from "next/navigation";
import "../styles/PresentationLi.css";
import Navbar from "./Navbar";

const PresentationLi = () => {
  const pathname = usePathname();

  const getContent = () => {
    switch (pathname) {
      case "/nosotros":
        return {
          heading: "MÁS QUE UN CENTRO DE ENTRENAMIENTO Y SALUD EN BARCELONA",
          text: "CENTRO DE ENTRENAMIENTO Y SALUD",
        };
      case "/servicios":
        return {
          heading:
            "VARIEDAD DE SERVICIOS DISEÑADOS PARA MEJORAR TU CALIDAD DE VIDA",
          text: "CENTRO DE ENTRENAMIENTO Y SALUD",
        };
      case "/precios":
        return {
          heading:
            "PRECIOS DE NUESTROS BONOS DE ENTRENAMIENTO PERSONAL, FISIOTERAPIA Y NUTRICIÓN",
          text: "CENTRO DE ENTRENAMIENTO Y SALUD",
        };
      case "/contacto":
        return {
          heading: "¡HABLEMOS!",
          text: "CENTRO DE ENTRENAMIENTO Y SALUD",
        };
      default:
        return {
          heading: "EMPIEZA TU CAMINO HACIA UNA VIDA MÁS SALUDABLE",
          text: "CENTRO DE ENTRENAMIENTO Y SALUD",
        };
    }
  };

  const { heading, text } = getContent();

  return (
    <div className="presentation-li">
      <Navbar />
      <div className="presentation-text-li">
        <p>{text}</p>
        <h1>{heading}</h1>
      </div>
    </div>
  );
};

export default PresentationLi;
