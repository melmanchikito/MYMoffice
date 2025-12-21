export default function CTA() {
  return (
    <section id="cotizar" className="section cta">
      <div className="container cta__box">
        <div>
          <h2 className="cta__title">¿Listo para cotizar tu oficina?</h2>
          <p className="cta__text">
            Escríbenos y te armamos una propuesta según tu espacio y presupuesto.
          </p>
        </div>

        <div className="cta__actions">
          <a className="btn btn-primary" href="#contacto">Ir a contacto</a>
          <a className="btn btn-cta-secondary" href="#destacados">Ver destacados</a>

        </div>
      </div>
    </section>
  );
}
