"use client";

import React, { useState } from "react";
import "../styles/Instalations.css";
import Image from "next/image";

const Instalations = () => {
  const images = [
    "/carousel-1.png",
    "/carousel-2.png",
    "/carousel-3.png",
    "/carousel-1.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === 0 ? images.length : prevIndex) - 1
    );
  };

  // Índices para mostrar 3 imágenes a la vez
  const visibleImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <div className="instalations">
      <h2>INSTALACIONES</h2>
      <p>
        Makalu tiene una sala de entrenamiento que está totalmente equipada, te
        permitirá trabajar todos los grupos musculares de forma completa. El
        objetivo de la sala es desarrollar un entrenamiento personalizado y
        único, por eso puedes venir de manera individual o en pareja y estarás o
        estaréis acompañados del entrenador. Dispone de un box de fisioterapia y
        nutrición con todo el material necesario. Dos vestuarios individuales y
        una entrada dónde te vas a sentir como en casa.
      </p>

      <div className="carousel">
        <button onClick={handlePrev} className="carousel-button prev">
          &#8249;
        </button>
        <div className="carousel-images">
          {visibleImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Instalation ${index + 1}`}
              className="carousel-image"
              width={300}
              height={200}
            />
          ))}
        </div>
        <button onClick={handleNext} className="carousel-button next">
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Instalations;
