import Logo from "./Logo.jsx";

export default function Footer({ onNavigate, theme }) {
  const links = [
    ["Services", "/services"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  return (
    <footer className="site-footer">
      <div>
        <Logo variant={theme === "dark" ? "dark" : "light"} className="footer-logo" />
        <p>
          AK Machinery and Innovations delivers premium embroidery, branded apparel, and local promotion solutions in Kampala.
        </p>
      </div>
      <div>
        <h2>Visit</h2>
        <p>Nasser Road, Kampala, Uganda</p>
      </div>
      <div>
        <h2>Contact</h2>
        <p>+256 701 234 567</p>
        <p>hello@akmachinery.ug</p>
        <p>Monday - Saturday, 08:30 AM - 06:00 PM</p>
      </div>
      <div>
        <h2>Pages</h2>
        {links.map(([label, path]) => (
          <button key={path} type="button" onClick={() => onNavigate(path)}>
            {label}
          </button>
        ))}
      </div>
    </footer>
  );
}
