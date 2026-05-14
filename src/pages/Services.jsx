import CTA from "../components/CTA.jsx";
import { services } from "../data/services.js";

export default function Services({ onNavigate }) {
  return (
    <>
      <section className="page-hero section-reveal">
        <p className="eyebrow">Services</p>
        <h1>Embroidery, branded apparel, and print solutions for Kampala.</h1>
      </section>

      <section className="service-index section-reveal">
        {services.map((service, index) => (
          <article className="service-row" key={service.title}>
            <span
              className="service-card-image"
              style={{ "--service-image": `url("${service.image}")` }}
              aria-hidden="true"
            />
            <div className="service-card-copy">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="process-band section-reveal">
        <div>
          <p className="eyebrow">Our process</p>
          <h2>From concept to custom-stitched apparel, we keep delivery simple and local.</h2>
        </div>
        <ol>
          <li>Share your brand, artwork, and garment preferences.</li>
          <li>We digitize, mock up, and preview every design.</li>
          <li>Production begins with embroidery and quality control on site.</li>
          <li>Local delivery and pick-up from Nasser Road in Kampala.</li>
        </ol>
      </section>

      <CTA onNavigate={onNavigate} />
    </>
  );
}
