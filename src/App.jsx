import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const routes = {
  "/": Home,
  "/services": Services,
  "/about": About,
  "/contact": Contact,
};

const themeStorageKey = "ak-theme-preference";

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function normalizePath(path) {
  if (!path || path === "/index.html") return "/";
  return routes[path] ? path : "/";
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));
  const [themePreference, setThemePreference] = useState(() => {
    const savedTheme = window.localStorage.getItem(themeStorageKey);
    return ["system", "light", "dark"].includes(savedTheme) ? savedTheme : "system";
  });
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);

  const Page = useMemo(() => routes[currentPath] || Home, [currentPath]);
  const theme = themePreference === "system" ? systemTheme : themePreference;

  const navigate = (path) => {
    const nextPath = normalizePath(path);
    window.history.pushState({}, "", nextPath);
    setCurrentPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onPopState = () => setCurrentPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onPreferenceChange = (event) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", onPreferenceChange);
    return () => mediaQuery.removeEventListener("change", onPreferenceChange);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(themeStorageKey, themePreference);
  }, [themePreference]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    const elements = document.querySelectorAll(".section-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [currentPath]);

  return (
    <>
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        theme={theme}
        themePreference={themePreference}
        onThemePreferenceChange={setThemePreference}
      />
      <main>
        <Page onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </>
  );
}
