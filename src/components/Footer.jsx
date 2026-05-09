import Logo from "./Logo.jsx";

export default function Footer({ onNavigate }) {
  const links = [
    ["Services", "/services"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  return (
    <footer className="site-footer">
      <div>
        <Logo variant="light" className="footer-logo" />
        <p>
          AK Machinery Solution Sdn. Bhd. supports food processing, industrial equipment,
          stainless steel fabrication, control panels, and after sales service.
        </p>
      </div>
      <div>
        <h2>Visit</h2>
        <p>No. 215, Jalan 1, Kawasan Perindustrian Ehsan Jaya, Kepong, Kuala Lumpur, Malaysia, 52100</p>
      </div>
      <div>
        <h2>Contact</h2>
        <p>03-62620120</p>
        <p>sales@akmachinery.com.my</p>
        <p>Monday - Saturday, 08.30 AM - 05.30 PM</p>
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
