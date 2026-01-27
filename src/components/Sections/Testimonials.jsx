export default function Testimonials() {
  const list = [
    { name: "Andrea P.", text: "Compramos estaciones de trabajo y quedaron perfectas. Excelente atención." },
    { name: "Carlos M.", text: "La silla ejecutiva es otra cosa… comodidad real para todo el día." },
    { name: "María L.", text: "Entrega rápida y asesoría clara. Recomendados." },
    { name: "Adamgard", text: "Excelente calidad y servicio. Muy satisfecho con mi compra." },
  ];

  return (
    <section id="testimonios" className="section section-alt">
      <div className="container">
        <h2 className="section__title">Reseñas</h2>
        <p className="section__subtitle">Clientes felices con sus oficinas renovadas.</p>

        <div className="grid">
          {list.map((t) => (
            <article key={t.name} className="card">
              <h3 className="card__title">{t.name}</h3>
              <p className="card__text">“{t.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
