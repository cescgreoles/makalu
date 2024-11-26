import Image from "next/image";
import "../styles/ContentSection.css";

const ContentSection = () => {
  const cards = [
    {
      img: "/marti.png",
      name: "John Doe",
      text: "El meu objectiu com a entrenador és ajudar-te a assolir les teves metes de manera efectiva i sostenible, brindant-te suport i orientació personalitzada en cada pas del teu camí cap a una vida més saludable.Tractaré de motivar-te i transformar la teva vida a través de programes d'entrenament adaptats a les teves necessitats individuals.",
    },
    {
      img: "/kike.png",
      name: "Jane Smith",
      text: "El meu objectiu com a entrenador és ajudar-te a assolir les teves metes de manera efectiva i sostenible, brindant-te suport i orientació personalitzada en cada pas del teu camí cap a una vida més saludable.Tractaré de motivar-te i transformar la teva vida a través de programes d'entrenament adaptats a les teves necessitats individuals.",
    },
    {
      img: "/ale.png",
      name: "Alice Johnson",
      text: "El meu objectiu com a entrenador és ajudar-te a assolir les teves metes de manera efectiva i sostenible, brindant-te suport i orientació personalitzada en cada pas del teu camí cap a una vida més saludable.Tractaré de motivar-te i transformar la teva vida a través de programes d'entrenament adaptats a les teves necessitats individuals.",
    },
    {
      img: "/gerard.png",
      name: "Mark Lee",
      text: "El meu objectiu com a entrenador és ajudar-te a assolir les teves metes de manera efectiva i sostenible, brindant-te suport i orientació personalitzada en cada pas del teu camí cap a una vida més saludable.Tractaré de motivar-te i transformar la teva vida a través de programes d'entrenament adaptats a les teves necessitats individuals.",
    },
    {
      img: "/nutri.png",
      name: "Emily Davis",
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

      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <Image
              src={card.img}
              alt={card.name}
              width={150}
              height={150}
              className="card-image"
            />
            <h3 className="card-title">{card.name}</h3>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSection;
