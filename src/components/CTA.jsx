export default function CTA({ onNavigate }) {
  return (
    <section className="cta-band section-reveal">
      <p className="eyebrow">Ready to plan the next move?</p>
      <h2>Tell us what your production line needs to do better.</h2>
      <button className="text-action light-action" type="button" onClick={() => onNavigate("/contact")}>
        <span>Start a conversation</span>
        <span aria-hidden="true">{"->"}</span>
      </button>
    </section>
  );
}
