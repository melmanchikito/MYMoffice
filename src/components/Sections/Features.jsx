import asesoriaImg from "../../assets/img/asesoriaImg.jpeg";
import calidadImg from "../../assets/img/calidadImg.jpeg";
import disenoImg from "../../assets/img/Escritorio1.jpeg";
import garantiaImg from "../../assets/img/garantiaImg.jpeg";

export default function Features() {
  const benefits = [
    {
      title: "Calidad y durabilidad",
      text: "Materiales resistentes para uso diario.",
      img: calidadImg,
    },
    {
      title: "Diseño premium",
      text: "Estética moderna con detalles elegantes.",
      img: disenoImg,
    },
    {
      title: "Asesoría personalizada",
      text: "Te ayudamos a elegir según tu espacio.",
      img: asesoriaImg,
    },
    {
      title: "Garantía y respaldo",
      text: "Compra segura con soporte post-venta.",
      img: garantiaImg,
    },
  ];

  return (
    <section id="beneficios" className="section">
      <div className="container">
        <h2 className="section__title">Beneficios</h2>
        <p className="section__subtitle">
          Más que muebles: una experiencia completa para tu oficina.
        </p>

        <div className="grid">
          {benefits.map((b) => (
            <article key={b.title} className="card benefit-card">
              <img src={b.img} alt={b.title} className="benefit-img" />
              <h3 className="card__title">{b.title}</h3>
              <p className="card__text">{b.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
