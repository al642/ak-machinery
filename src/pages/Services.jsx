import CTA from "../components/CTA.jsx";
import { services } from "../data/services.js";

export default function Services({ onNavigate }) {
  return (
    <>
      <section className="page-hero section-reveal">
        <p className="eyebrow">Services</p>
        <h1>Focused support across machinery supply, fabrication, controls, and maintenance.</h1>
      </section>

      <section className="service-index section-reveal">
        {services.map((service, index) => (
          <article className="service-row" key={service.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
            <div className="service-image-slot" style={{ "--image": `url(${service.image})` }} aria-hidden="true" />
          </article>
        ))}
      </section>

      <section className="process-band section-reveal">
        <div>
          <p className="eyebrow">How work moves</p>
          <h2>Clear scope, practical planning, careful execution, and support after handover.</h2>
        </div>
        <ol>
          <li>Understand the machine, line, or production problem.</li>
          <li>Recommend the practical equipment, fabrication, or service path.</li>
          <li>Execute with attention to safety, access, downtime, and maintainability.</li>
          <li>Stay available for parts, repair, and after sales support.</li>
        </ol>
      </section>

      <CTA onNavigate={onNavigate} />
    </>
  );
}
