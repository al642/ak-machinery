import Hero from "../components/Hero.jsx";
import CTA from "../components/CTA.jsx";
import { services } from "../data/services.js";

export default function Home({ onNavigate }) {
  return (
    <>
      <Hero
        title="Industrial machinery support with practical factory know-how."
        text="AK Machinery Solution supplies, fabricates, repairs, and supports production equipment for teams that need dependable machines and clear technical guidance."
        onNavigate={onNavigate}
      />

      <section className="intro-strip section-reveal">
        <p>Established from hands-on machine supply experience and strengthened as AK Machinery Solution Sdn. Bhd., the company works across food processing, agriculture, wastewater treatment, stainless fabrication, and industrial systems.</p>
      </section>

      <section className="service-flow section-reveal">
        <div className="section-heading">
          <p className="eyebrow">What we offer</p>
          <h2>Services built around production continuity.</h2>
        </div>
        <div className="service-list">
          {services.slice(0, 5).map((service, index) => (
            <button key={service.title} type="button" onClick={() => onNavigate("/services")}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{service.title}</strong>
              <small>{service.description}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="metrics-band section-reveal">
        <div><strong>20+</strong><span>Years Experience</span></div>
        <div><strong>157+</strong><span>Satisfied Clients</span></div>
        <div><strong>1200+</strong><span>Completed Projects</span></div>
      </section>

      <CTA onNavigate={onNavigate} />
    </>
  );
}
