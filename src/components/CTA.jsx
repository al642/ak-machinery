export default function CTA({ onNavigate }) {
  return (
    <section className="cta-band section-reveal">
      <p className="eyebrow">Ready to make your brand visible?</p>
      <h2>Send us your logo, and we’ll help you transform it into apparel and embroidery.</h2>
      <button className="text-action light-action" type="button" onClick={() => onNavigate("/contact") }>
        <span>Get a quote</span>
        <span aria-hidden="true">{"->"}</span>
      </button>
    </section>
  );
}
