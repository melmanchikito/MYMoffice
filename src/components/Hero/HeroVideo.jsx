import { useEffect, useMemo, useState } from "react";
import "./HeroVideo.css";

import hero1 from "../../assets/videos/hero1.mp4";
import hero2 from "../../assets/videos/hero2.mp4";
import hero3 from "../../assets/videos/hero3.mp4";

export default function HeroVideo() {
  const slides = useMemo(
    () => [
      { src: hero1, label: "Diseño" },
      { src: hero2, label: "Ergonomía" },
      { src: hero3, label: "Durabilidad" },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="heroVideo" aria-label="Presentación M&M Office">
      <div className="heroVideo__media">
        {slides.map((s, i) => (
          <video
            key={s.src}
            className={`heroVideo__video ${i === index ? "is-active" : ""}`}
            src={s.src}
            autoPlay
            muted
            loop
            playsInline
          />
        ))}

        <div className="heroVideo__overlay" />

        <div className="container heroVideo__content">
          <span className="heroVideo__badge">
            Diseño • Ergonomía • Durabilidad
          </span>

          <h1 className="heroVideo__title">
            Muebles de oficina que elevan tu{" "}
            <span className="heroVideo__accent">productividad</span>
          </h1>

          <p className="heroVideo__subtitle">
            Equipamos tu espacio con escritorios, sillas ejecutivas y estaciones
            de trabajo con estilo premium.
          </p>

          <div className="heroVideo__actions">
            <a className="btn btn-primary" href="#cotizar">
              Cotizar ahora
            </a>

            <a className="btn heroVideo__btnSecondary" href="#destacados">
              Ver destacados
            </a>
          </div>

          <div className="heroVideo__dots" aria-label="Control de carrusel">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`heroVideo__dot ${i === index ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Ir al video ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
