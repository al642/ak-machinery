import CTA from "../components/CTA.jsx";

export default function About({ onNavigate }) {
  return (
    <>
      <section className="page-hero section-reveal">
        <p className="eyebrow">About AK Machinery and Innovations</p>
        <h1>Uganda’s local embroidery studio on Nasser Road, built for brands that need reliable apparel.</h1>
      </section>

      <section className="split-story section-reveal">
        <div>
          <h2>Our story</h2>
          <p>
            AK Machinery and Innovations started as a small local embroidery workshop and grew into a trusted Kampala brand partner. We help schools, hospitality teams, startups, and events look polished and consistent.
          </p>
        </div>
        <div>
          <h2>What we care about</h2>
          <p>
            Quality stitch work, clear proofing, and fast local service are the foundation of every order. We keep the process personal so businesses on Nasser Road and across Uganda can move quickly.
          </p>
        </div>
      </section>

      <section className="directors section-reveal">
        <p className="eyebrow">Why choose us</p>
        <ul>
          <li>On-site embroidery and printing expertise</li>
          <li>Fast Kampala delivery and support</li>
          <li>Local understanding of schools, teams, and corporate brands</li>
        </ul>
      </section>

      <CTA onNavigate={onNavigate} />
    </>
  );
}
