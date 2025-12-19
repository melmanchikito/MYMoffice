import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
            <span className="hero__badge">Diseño • Ergonomía • Durabilidad</span>

          <h1 className="hero__title">
            Muebles de oficina que elevan tu <span className="hero__accent">productividad</span>
          </h1>

          <p className="hero__subtitle">
            Equipamos tu espacio con escritorios, sillas ejecutivas y estaciones de trabajo.
            Estilo limpio en blanco, potencia en rojo y detalle premium en dorado.
          </p>

          <div className="hero__actions">
            <a className="btn btn-primary" href="#cotizar">Cotizar ahora</a>
            <a className="btn hero-btn-secondary" href="#destacados">Ver destacados</a>
          </div>

          <div className="hero__stats" aria-label="Beneficios principales">
            <div className="hero__stat">
              <strong>Entrega rápida</strong>
              <span>Según ciudad</span>
            </div>
            <div className="hero__stat">
              <strong>Garantía</strong>
              <span>Calidad asegurada</span>
            </div>
            <div className="hero__stat">
              <strong>Asesoría</strong>
              <span>Para tu oficina</span>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card">
            <div className="hero__cardTop">
              <span className="hero__dot" />
              <span className="hero__dot" />
              <span className="hero__dot" />
            </div>
            <div className="hero__mock">
              <div className="hero__mockLine" />
              <div className="hero__mockLine short" />
              <div className="hero__mockGrid">
                <div className="hero__mockBox" />
                <div className="hero__mockBox" />
                <div className="hero__mockBox" />
              </div>
            </div>
            <div className="hero__seal">Selección premium</div>
          </div>
        </div>
      </div>
    </section>
  );
}
