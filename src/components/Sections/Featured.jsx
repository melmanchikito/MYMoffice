import escritorio1 from "../../assets/img/Escritorio1.jpeg";
import escritorio2 from "../../assets/img/Escritorio2.jpeg";
import escritorio3 from "../../assets/img/Escritorio3.jpeg";

export default function Featured() {
  const products = [
    {
      img: escritorio1,
      alt: "Escritorio moderno 1",
      title: "Escritorio Ejecutivo",
      desc: "Diseño elegante y resistente.",
      badge: "Top venta",
    },
    {
      img: escritorio2,
      alt: "Escritorio moderno 2",
      title: "Escritorio Corporativo",
      desc: "Ideal para oficinas empresariales.",
      badge: "Nuevo",
    },
    {
      img: escritorio3,
      alt: "Escritorio moderno 3",
      title: "Escritorio Profesional",
      desc: "Espacio amplio y acabado premium.",
      badge: "Premium",
    },
  ];

  return (
    <section id="destacados" className="section section-alt">
      <div className="container">
        <h2 className="section__title">Destacados</h2>
        <p className="section__subtitle">
          Escritorios modernos para oficinas profesionales.
        </p>

        <div className="grid">
          {products.map((p) => (
            <article key={p.title} className="card product-card">
              <div className="product-media">
                <span className="product-badge">{p.badge}</span>
                <img src={p.img} alt={p.alt} className="product-img" />
              </div>

              <h3 className="card__title">{p.title}</h3>
              <p className="card__text">{p.desc}</p>

              <a className="btn btn-primary product-btn" href="#cotizar">
                Cotizar
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

