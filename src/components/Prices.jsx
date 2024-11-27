"use client";

import React, { useState } from "react";
import "../styles/Prices.css";

const Prices = () => {
  const [activeState, setActiveState] = useState("ENTRENAMIENTO PERSONAL");

  const content = {
    "ENTRENAMIENTO PERSONAL": (
      <div className="pricing-table-up">
        <div className="pricing-table">
          <h3>INDIVIDUAL</h3>
          <div className="pricing-row">
            <div>1 ENTRENO</div>
            <div>45€</div>
          </div>
          <div className="pricing-row">
            <div>BONO 4</div>
            <div>
              156€ <span>(39€/sesión)</span>
            </div>
          </div>
          <div className="pricing-row">
            <div>BONO 8</div>
            <div>
              280€ <span>(35€/sesión)</span>
            </div>
          </div>
          <div className="pricing-row">
            <div>BONO 12</div>
            <div>
              408€ <span>(34€/sesión)</span>
            </div>
          </div>
          <div className="pricing-row">
            <div>BONO 16</div>
            <div>
              528€ <span>(33€/sesión)</span>
            </div>
          </div>
          <div className="pricing-row">
            <div>BONO 20</div>
            <div>
              640€ <span>(32€/sesión)</span>
            </div>
          </div>
        </div>
        <div className="pricing-table">
          <h3>EN PAREJA</h3>
          <div className="pricing-row">
            <div>1 ENTRENO</div>
            <div>45€</div>
          </div>
          <div className="pricing-row">
            <div>BONO 4</div>
            <div>
              156€ <span>(39€/sesión)</span>
            </div>
          </div>
          <div className="pricing-row">
            <div>BONO 8</div>
            <div>
              280€ <span>(35€/sesión)</span>
            </div>
          </div>
          <div className="pricing-row">
            <div>BONO 12</div>
            <div>
              408€ <span>(34€/sesión)</span>
            </div>
          </div>
          <div className="pricing-row">
            <div>BONO 16</div>
            <div>
              528€ <span>(33€/sesión)</span>
            </div>
          </div>
          <div className="pricing-row">
            <div>BONO 20</div>
            <div>
              640€ <span>(32€/sesión)</span>
            </div>
          </div>
        </div>
      </div>
    ),
    FISIOTERAPIA: (
      <div className="fisio-div">
        <div className="pricing-table">
          <h3>SESIONES FISIOTERAPIA</h3>
          <div className="pricing-row">
            <div>1 ENTRENO</div>
            <div>45€</div>
          </div>
          <div className="pricing-row">
            <div>BONO 4</div>
            <div>
              156€ <span>(39€/sesión)</span>
            </div>
          </div>
          <div className="pricing-row">
            <div>BONO 4</div>
            <div>
              156€ <span>(39€/sesión)</span>
            </div>
          </div>
        </div>
      </div>
    ),
    "PLANES NUTRICIONALES": (
      <div className="nutri-div">
        <div className="pricing-table">
          <h3>MODALIDAD ONLINE</h3>
          <div className="fisio">
            <p>
              Te haremos llegar un cuestionario inicial para que nos des la
              información necesaria que nos permita entregarte una pauta
              personalizada. El seguimiento se realizará mediante correo
              electrónico y se modificara la pauta en base a tu evolución.
            </p>
            <p>- Pauta dietética     40€</p>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="prices">
      <div className="state-buttons">
        {Object.keys(content).map((state) => (
          <div
            key={state}
            className={`state-button ${activeState === state ? "active" : ""}`}
            onClick={() => setActiveState(state)}
          >
            <h2>{state}</h2>
          </div>
        ))}
      </div>

      <div className="state-content">{content[activeState]}</div>
    </div>
  );
};

export default Prices;
