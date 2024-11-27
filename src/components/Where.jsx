import React from "react";
import "../styles/Where.css";

const Where = ({ lat, lng }) => {
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${lat},${lng}&zoom=15`;

  return (
    <div className="where">
      <h1>DÓNDE ESTAMOS?</h1>
      <iframe
        title="Mapa"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Where;
