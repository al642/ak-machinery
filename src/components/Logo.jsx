const logoSources = {
  dark: "/images/logo/ak-dark.png",
  light: "/images/logo/ak-light.png",
};

export default function Logo({ variant = "dark", className = "" }) {
  return (
    <img
      className={`site-logo ${className}`}
      src={logoSources[variant]}
      alt="AK Machinery Solution"
    />
  );
}
