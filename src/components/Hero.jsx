export default function Hero({
  eyebrow = "Embroidery, apparel, and branding",
  title,
  text,
  actionLabel = "Explore services",
  actionPath = "/services",
  onNavigate,
}) {
  return (
    <section className="hero section-reveal">
      <div className="hero-background" aria-hidden="true">
        {[
          "/images/hero/logo embroidery.jpg",
          "/images/hero/hand embroidery.jpg",
          "/images/hero/logo embroidery(2).jpg",
          "/images/hero/designer.jpg",
        ].map((src, index) => (
          <img
            key={src}
            className="hero-slide"
            src={src}
            alt=""
            style={{ "--slide-index": index }}
          />
        ))}
      </div>
      <div className="hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-lead">{text}</p>
        <button className="text-action" type="button" onClick={() => onNavigate(actionPath)}>
          <span>{actionLabel}</span>
          <span aria-hidden="true">{"->"}</span>
        </button>
      </div>
    </section>
  );
}
