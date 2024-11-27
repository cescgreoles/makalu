import React from "react";
import "../styles/Services.css";

const ServiceSection = () => {
  const services = [
    {
      number: "1",
      title: "ENTRENAMIENTO PERSONAL",
      description:
        "Te proporcionamos entrenamientos a medida, ya sea de forma individual o en pareja, adaptados a tus metas y necesidades específicas. Nuestro objetivo es ayudarte a alcanzar tus objetivos de forma efectiva y segura.",
      price: "Precios",
    },
    {
      number: "2",
      title: "FISIOTERAPIA",
      description:
        "Contamos con fisioterapeutas que te ayudarán a prevenir y tratar lesiones, mejorar tu movilidad y aliviar cualquier molestia muscular o articular. Tu bienestar físico es nuestra prioridad. Sesión de 1 hora con el fin de hacer una valoración, diagnóstico, planteamiento, intervención y evaluación",
      price: "Precios",
    },
    {
      number: "3",
      title: "NUTRICIÓN",
      description:
        "Nuestro nutricionista te brindará una orientación personalizada para mejorar tus hábitos alimenticios y alcanzar un equilibrio saludable. La alimentación es esencial para tu bienestar general, y estamos aquí para apoyarte en ese camino. Plan nutricional ajustado a tus objetivos y necesidades.",
      price: "Precios",
    },
  ];

  return (
    <div className="service-section">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="intro-service">
            <div className="service-number">{service.number}</div>
            <h3 className="service-title">{service.title}</h3>
          </div>
          <p className="service-description">{service.description}</p>
          <button className="service-price">{service.price}</button>
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;