export default function Contact() {
  return (
    <section id="contacto" className="section section-alt">
      <div className="container">
        <h2 className="section__title">Contacto</h2>
        <p className="section__subtitle">
          Te respondemos rápido para ayudarte con tu cotización.
        </p>

        <div className="contact">
          <div className="card">
            <h3 className="card__title">M&amp;M Muebles para Oficinas</h3>
            <p className="card__text"><strong>WhatsApp:</strong> +593 9XXXXXXXX</p>
            <p className="card__text"><strong>Correo:</strong> ventas@mmoficinas.com</p>
            <p className="card__text"><strong>Ciudad:</strong> Ecuador</p>

            <a
              className="btn btn-primary"
              href="https://wa.me/5939XXXXXXXX"
              target="_blank"
              rel="noreferrer"
            >
              Contactar por WhatsApp
            </a>
          </div>

          <form className="card" onSubmit={(e) => e.preventDefault()}>
            <h3 className="card__title">Déjanos tus datos</h3>

            <label className="field">
              Nombre
              <input className="input" type="text" placeholder="Tu nombre" required />
            </label>

            <label className="field">
              Teléfono
              <input className="input" type="tel" placeholder="Tu número" required />
            </label>

            <label className="field">
              Mensaje
              <textarea className="input" rows="4" placeholder="¿Qué necesitas cotizar?" required />
            </label>

            <button className="btn btn-outline" type="submit">Enviar</button>
            <p className="hint">*Este formulario es demo (luego lo conectamos).</p>
          </form>
        </div>
      </div>
    </section>
  );
}
