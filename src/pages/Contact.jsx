export default function Contact() {
  return (
    <>
      <section className="page-hero section-reveal">
        <p className="eyebrow">Contact</p>
        <h1>Ready to outfit your team or event with branded embroidery and apparel.</h1>
      </section>

      <section className="contact-layout section-reveal">
        <div className="contact-details">
          <a href="tel:+256701234567"><span aria-hidden="true">TEL</span>+256 701 234 567</a>
          <a href="mailto:hello@akmachinery.ug"><span aria-hidden="true">MAIL</span>hello@akmachinery.ug</a>
          <p><span aria-hidden="true">MAP</span>Nasser Road, Kampala, Uganda</p>
        </div>

        <form className="contact-form">
          <label>
            <span>Name</span>
            <input type="text" name="name" autoComplete="name" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label>
            <span>Business</span>
            <input type="text" name="business" />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="6"></textarea>
          </label>
          <button className="submit-button" type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
}
