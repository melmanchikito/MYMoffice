import { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/img/LOGO1.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Cierra el menú si cambias el tamaño a escritorio
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header" id="top">
      <div className="container header__row">
        <a className="header__brand" href="#top" aria-label="Inicio" onClick={closeMenu}>
          <img src={logo} alt="M&M Office"className="header__logo"/>

          <div className="header__brandText">
            <span className="header__name">M&M</span>
            <span className="header__tag">OFFICE</span>
          </div>
          <span className="badge">Premium</span>
        </a>

        {/* NAV ESCRITORIO */}
        <nav className="header__nav" aria-label="Navegación principal">
          <a href="#categorias">Categorías</a>
          <a href="#destacados">Destacados</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* Acciones + hamburguesa */}
        <div className="header__actions">
          <a className="btn btn-outline header__btnHideOnMobile" href="#contacto">
            Contactar
          </a>
          <a className="btn btn-primary header__btnHideOnMobile" href="#cotizar">
            Cotizar
          </a>

          <button
            type="button"
            className={`burger ${isOpen ? "is-open" : ""}`}
            aria-label="Abrir menú"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="burger__bar" />
            <span className="burger__bar" />
            <span className="burger__bar" />
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL (se despliega) */}
      <div
        id="mobile-menu"
        className={`mobileMenu ${isOpen ? "mobileMenu--open" : ""}`}
      >
        <div className="container mobileMenu__inner">
          <a href="#categorias" onClick={closeMenu}>Categorías</a>
          <a href="#destacados" onClick={closeMenu}>Destacados</a>
          <a href="#beneficios" onClick={closeMenu}>Beneficios</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>

          <div className="mobileMenu__actions">
            <a className="btn btn-outline" href="#contacto" onClick={closeMenu}>
              Contactar
            </a>
            <a className="btn btn-primary" href="#cotizar" onClick={closeMenu}>
              Cotizar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
