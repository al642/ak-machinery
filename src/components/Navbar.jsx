import { useEffect, useState, useRef } from "react";
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
  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth <= 900 : false));
  const navRef = useRef(null);

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
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(max-width: 900px)");
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
    } else {
      mql.addListener(onChange);
    }
    // Keep navRef visibility in sync for cases where CSS may be overridden
    const syncNav = () => {
      try {
        if (!navRef || !navRef.current) return;
        navRef.current.style.display = mql.matches ? "none" : "";
      } catch (e) {
        // ignore
      }
    };
    syncNav();

    if (mql.addEventListener) {
      mql.addEventListener("change", syncNav);
    } else {
      mql.addListener(syncNav);
    }

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", onChange);
        mql.removeEventListener("change", syncNav);
      } else {
        mql.removeListener(onChange);
        mql.removeListener(syncNav);
      }
    };
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
        ref={navRef}
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


    </header>
  );
}
