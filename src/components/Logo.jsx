const logoSources = {
  dark: "/images/logo/aklogodark.png",
  light: "/images/logo/aklogolight.png",
};

const logoSourcesTrans = {
  dark: "/images/logo/aklogodark_trans.png",
  light: "/images/logo/aklogolight_trans.png",
};

export default function Logo({ variant = "dark", className = "" }) {
  const handleError = (e) => {
    const el = e.currentTarget;
    const altSrc = logoSourcesTrans[variant];
    if (el.src && !el.dataset._triedTrans) {
      el.dataset._triedTrans = "1";
      el.src = altSrc;
    }
  };

  return (
    <img
      className={`site-logo ${className} site-logo-${variant}`}
      src={logoSources[variant]}
      onError={handleError}
      alt="AK Machinery Solution"
      loading="lazy"
    />
  );
}
