import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar({ currentPath, onNavigate, theme, themePreference, onThemePreferenceChange }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const nextScrollY = window.scrollY;
      const movingDown = nextScrollY > lastScrollY;

      setScrolled(nextScrollY > 16);
      setHidden(movingDown && nextScrollY > 150 && !open);
      lastScrollY = Math.max(nextScrollY, 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleNavigate = (path) => {
    onNavigate(path);
    setOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${hidden ? "is-hidden" : ""}`}>
      <a className="brand" href="/" onClick={(event) => {
        event.preventDefault();
        handleNavigate("/");
      }}>
        <Logo variant={theme === "dark" ? "dark" : "light"} />
      </a>

      <nav
        id="main-navigation"
        className={`nav-links ${open ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className={currentPath === item.path ? "active" : ""}
            onClick={(event) => {
              event.preventDefault();
              handleNavigate(item.path);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <ThemeToggle preference={themePreference} onPreferenceChange={onThemePreferenceChange} />

      {isMobile && (
        <>
          <button
            className="icon-button menu-button"
            type="button"
            aria-controls="main-navigation"
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true">{open ? "X" : "="}</span>
          </button>

          {/* Mobile fallback menu - ensures hamburger always reveals content on small screens */}
          <div className={`mobile-nav ${open ? "is-open" : ""}`} aria-hidden={!open}>
            <div className="mobile-nav-inner">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  className={currentPath === item.path ? "active" : ""}
                  type="button"
                  onClick={() => handleNavigate(item.path)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}


    </header>
  );
}
