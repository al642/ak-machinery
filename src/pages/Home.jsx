import Hero from "../components/Hero.jsx";
import CTA from "../components/CTA.jsx";
import { services } from "../data/services.js";

export default function Home({ onNavigate }) {
  return (
    <>
      <Hero
        title="AK Machinery and Innovations brings branded embroidery to Kampala."
        text="From uniforms and event apparel to custom patches and merchandise, our Nasser Road studio helps your brand look sharp and professional."
        actionLabel="Explore services"
        actionPath="/services"
        onNavigate={onNavigate}
      />

      <section className="intro-strip section-reveal">
        <p>AK Machinery and Innovations is a Kampala-based embroidery and branding partner for schools, hospitality teams, events, and local businesses.</p>
      </section>

      <section className="service-flow section-reveal">
        <div className="section-heading">
          <p className="eyebrow">What we do</p>
          <h2>Custom embroidery, apparel, and branding made for teams and events.</h2>
        </div>
        <div className="service-list">
          {services.slice(0, 4).map((service, index) => (
            <button key={service.title} type="button" onClick={() => onNavigate("/services")}>
              <span
                className="service-card-image"
                style={{ "--service-image": `url("${service.image}")` }}
                aria-hidden="true"
              />
              <span className="service-card-copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{service.title}</strong>
                <small>{service.description}</small>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="metrics-band section-reveal">
        <div><strong>10+</strong><span>Years in Kampala</span></div>
        <div><strong>400+</strong><span>Branded clients</span></div>
        <div><strong>95%</strong><span>Repeat business</span></div>
      </section>

      <CTA onNavigate={onNavigate} />
    </>
  );
}
