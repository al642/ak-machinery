export default function Contact() {
  return (
    <>
      <section className="page-hero section-reveal">
        <p className="eyebrow">Contact</p>
        <h1>Bring the machine issue, line plan, or fabrication requirement. We will help shape the next step.</h1>
      </section>

      <section className="contact-layout section-reveal">
        <div className="contact-details">
          <a href="tel:+60362620120"><span aria-hidden="true">TEL</span>03-62620120</a>
          <a href="mailto:sales@akmachinery.com.my"><span aria-hidden="true">MAIL</span>sales@akmachinery.com.my</a>
          <p><span aria-hidden="true">MAP</span>No. 215, Jalan 1, Kawasan Perindustrian Ehsan Jaya, Kepong, Kuala Lumpur, Malaysia, 52100</p>
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
            <span>Subject</span>
            <input type="text" name="subject" />
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
