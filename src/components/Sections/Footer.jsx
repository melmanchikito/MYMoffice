export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__row">
        <p>© {year} M&amp;M Muebles para Oficinas. Todos los derechos reservados.</p>
        <a href="#top">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
