export default function Hero({
  eyebrow = "Machinery, fabrication, and factory support",
  title,
  text,
  actionLabel = "Explore services",
  actionPath = "/services",
  onNavigate,
}) {
  return (
    <section className="hero section-reveal">
      <div className="hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <button className="text-action" type="button" onClick={() => onNavigate(actionPath)}>
          <span>{actionLabel}</span>
          <span aria-hidden="true">{"->"}</span>
        </button>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="machine-line line-one"></div>
        <div className="machine-line line-two"></div>
        <div className="machine-line line-three"></div>
      </div>
    </section>
  );
}
