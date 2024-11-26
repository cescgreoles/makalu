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
          heading: "CONOCE QUIÉNES SOMOS",
          text: "Somos un equipo apasionado por promover el bienestar físico y emocional a través del entrenamiento y la salud.",
        };
      case "/servicios":
        return {
          heading: "DESCUBRE NUESTROS SERVICIOS",
          text: "Ofrecemos programas personalizados de entrenamiento, asesorías nutricionales y planes de recuperación física.",
        };
      case "/precios":
        return {
          heading: "PLANES PARA TODOS LOS PRESUPUESTOS",
          text: "Elige entre nuestras opciones de membresías adaptadas a tus necesidades y objetivos de salud.",
        };
      case "/contacto":
        return {
          heading: "¡HABLEMOS!",
          text: "Contáctanos para resolver tus dudas y comenzar tu camino hacia una vida más saludable.",
        };
      default:
        return {
          heading: "EMPIEZA TU CAMINO HACIA UNA VIDA MÁS SALUDABLE",
          text: "Nos esforzamos por fomentar un estilo de vida activo y promover buenos hábitos en alimentación, postura, actividad física y descanso.",
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
