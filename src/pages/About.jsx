import CTA from "../components/CTA.jsx";

export default function About({ onNavigate }) {
  return (
    <>
      <section className="page-hero section-reveal">
        <p className="eyebrow">About AK Machinery</p>
        <h1>Machine supply experience shaped into a practical industrial solutions partner.</h1>
      </section>

      <section className="split-story section-reveal">
        <div>
          <h2>Company Background</h2>
          <p>
            AK Machinery Solution Sdn. Bhd. grew from AK Machine Supply, founded in 2007 through the hands-on experience of En. Mohd Aminuddin Bin Yumar. The company was formally established as AK Machinery Solution Sdn. Bhd. on February 14, 2020.
          </p>
        </div>
        <div>
          <h2>Where We Work</h2>
          <p>
            The team supports clients across food processing, industrial equipment, stainless steel fabrication, agriculture, wastewater treatment, generator systems, consultation, and after sales service.
          </p>
        </div>
      </section>

      <section className="directors section-reveal">
        <p className="eyebrow">Board of Directors</p>
        <ul>
          <li>Mohd Aminuddin B. Yumar</li>
          <li>Mohd Haniffa B. Yumar</li>
          <li>Mohammed Amirul Rashid</li>
        </ul>
      </section>

      <CTA onNavigate={onNavigate} />
    </>
  );
}
