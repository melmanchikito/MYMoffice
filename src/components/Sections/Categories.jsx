export default function Categories() {
  const items = [
    { title: "Sillas Ejecutivas", desc: "Ergonomía y soporte para largas jornadas." },
    { title: "Escritorios", desc: "Diseños modernos, resistentes y funcionales." },
    { title: "Estaciones de Trabajo", desc: "Optimiza espacios para equipos completos." },
    { title: "Archivadores", desc: "Organización premium para tu oficina." },
  ];

  return (
    <section id="categorias" className="section">
      <div className="container">
        <h2 className="section__title">Categorías</h2>
        <p className="section__subtitle">
          Todo lo que necesitas para una oficina cómoda, elegante y productiva.
        </p>

        <div className="grid">
          {items.map((it) => (
            <article key={it.title} className="card">
              <h3 className="card__title">{it.title}</h3>
              <p className="card__text">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
