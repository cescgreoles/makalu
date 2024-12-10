import Image from "next/image";
import "../styles/ContentSection.css";

const ContentSection = () => {
  const cards = [
    {
      img: "/marti.png",
      name: "Martí Rigol Carrasco",
      text: "El meu objectiu com a entrenador és ajudar-te a assolir les teves metes de manera efectiva i sostenible, brindant-te suport i orientació personalitzada en cada pas del teu camí cap a una vida més saludable.Tractaré de motivar-te i transformar la teva vida a través de programes d'entrenament adaptats a les teves necessitats individuals.",
    },
    {
      img: "/kike.png",
      name: "Enric Garcia Moliner",
      text: "El meu objectiu com a entrenador és ajudar-te a assolir les teves metes de manera efectiva i sostenible, brindant-te suport i orientació personalitzada en cada pas del teu camí cap a una vida més saludable.Tractaré de motivar-te i transformar la teva vida a través de programes d'entrenament adaptats a les teves necessitats individuals.",
    },
    {
      img: "/ale.png",
      name: "Alexandre Romeu Diaz",
      text: "El meu objectiu com a entrenador és ajudar-te a assolir les teves metes de manera efectiva i sostenible, brindant-te suport i orientació personalitzada en cada pas del teu camí cap a una vida més saludable.Tractaré de motivar-te i transformar la teva vida a través de programes d'entrenament adaptats a les teves necessitats individuals.",
    },
    {
      img: "/gerard.png",
      name: "Gerard Perez Arenas",
      text: "El meu objectiu com a entrenador és ajudar-te a assolir les teves metes de manera efectiva i sostenible, brindant-te suport i orientació personalitzada en cada pas del teu camí cap a una vida més saludable.Tractaré de motivar-te i transformar la teva vida a través de programes d'entrenament adaptats a les teves necessitats individuals.",
    },
    {
      img: "/nutri.png",
      name: "Alvaro Prat Roch",
      text: "El meu objectiu com a entrenador és ajudar-te a assolir les teves metes de manera efectiva i sostenible, brindant-te suport i orientació personalitzada en cada pas del teu camí cap a una vida més saludable.Tractaré de motivar-te i transformar la teva vida a través de programes d'entrenament adaptats a les teves necessitats individuals.",
    },
  ];

  return (
    <div className="section">
      <div className="intro">
        <h2>¿QUÉ ES MAKALU?</h2>
        <p>
          Makalu és més que un centre d´entrenament i salut a Barcelona. És el
          teu destí per assolir la teva millor versió. Oferim una varietat de
          serveis, incloent-hi entrenament personalitzat, fisioteràpia i
          assessorament nutricional, tots dissenyats per millorar la teva salut
          i qualitat de vida. A Makalu, prioritzem la teva seguretat, per això
          t&apos;oferim exercicis segurs i efectius. Uneix-te a nosaltres i
          comença el teu camí cap a una vida més saludable.
        </p>
      </div>

      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="intro">
        <h2>¿QUIÉNES SOMOS?</h2>
        <p>
          Somos un equipo joven y apasionado que cree en la importancia de la
          salud y el bienestar. Nos esforzamos por fomentar un estilo de vida
          activo y promover buenos hábitos en áreas como la alimentación, la
          postura, la actividad física y el descanso. Nuestro compromiso es
          ayudarte a sentirte y estar mejor, proporcionando un enfoque integral
          para tu salud.
        </p>
      </div>

      <div className="section">
        <div className="team-grid">
          {cards.map((card, index) => (
            <div key={index} className="team-member">
              <Image
                src={card.img}
                alt={card.name}
                width={150}
                height={150}
                className="member-photo"
              />
              <h3>{card.name}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
