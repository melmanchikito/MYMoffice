import "./Header.css";

export default function Header() {
  return (
    <header className="header" id="top">
      <div className="container header__row">
        <a className="header__brand" href="#top" aria-label="Inicio">
          <span className="header__logo">M&M</span>
          <div className="header__brandText">
            <span className="header__name">M&M</span>
            <span className="header__tag">OFFICE</span>
          </div>
          <span className="badge">Premium</span>
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <a href="#categorias">Categorías</a>
          <a href="#destacados">Destacados</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="header__actions">
          <a className="btn btn-outline" href="#contacto">Contactar</a>
          <a className="btn btn-primary" href="#cotizar">Cotizar</a>
        </div>
      </div>
    </header>
  );
}
