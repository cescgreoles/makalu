import React from "react";
import "../styles/Personal.css";

const Personal = () => {
  const divs = [
    {
      background: "url('/marti.png')",
      text: "Martí Rigol Carrasco",
      position: "ENTRENADOR PERSONAL",
    },
    {
      background: "url('/kike.png')",
      text: "Enric Garcia Moliner",
      position: "FISIOTERAPEUTA Y ENTRENADOR PERSONAL",
    },
    {
      background: "url('/ale.png')",
      text: "Alexandre Romeu Diaz",
      position: "ENTRENADOR PERSONAL",
    },
    {
      background: "url('/gerard.png')",
      text: "Gerard Perez Arenas",
      position: "FISIOTERAPEUTA",
    },
    {
      background: "url('/nutri.png')",
      text: "Alvaro Prat Roch",
      position: "NUTRICIONISTA",
    },
  ];

  return (
    <div className="personal-container">
      <h1>EQUIPO MAKALU</h1>
      <div className="personal-row">
        {divs.map((item, index) => (
          <div
            key={index}
            className="personal-item"
            style={{
              backgroundImage: item.background,
            }}
          >
            <div className="personal-info">
              <p className="personal-text">{item.text}</p>
              <text className="personal-position">{item.position}</text>
            </div>
          </div>
        ))}
      </div>
      <div className="button-div">
        <button>CONOCE MÁS SOBRE NOSOTROS</button>
      </div>
    </div>
  );
};

export default Personal;
