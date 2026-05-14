const logoSources = {
  dark: "/images/logo/aklogodark(2).png",
  light: "/images/logo/aklogolight.png",
};

const logoSourcesTrans = {
  dark: "/images/logo/aklogodark(2)_trans.png",
  light: "/images/logo/aklogolight_trans.png",
};

import { useEffect, useState } from "react";

export default function Logo({ variant = "dark", className = "" }) {
  const detectTheme = () => {
    try {
      if (typeof window !== "undefined") {
        const t = document.documentElement.dataset.theme;
        if (t === "dark") return "dark";
        if (t === "light") return "light";
      }
    } catch (e) {
      // ignore
    }
    return variant;
  };

  const [current, setCurrent] = useState(detectTheme);

  useEffect(() => {
    setCurrent(variant);
  }, [variant]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = document.documentElement;
    const mo = new MutationObserver(() => {
      const t = el.dataset.theme;
      if (t === "dark") setCurrent("dark");
      else if (t === "light") setCurrent("light");
    });
    mo.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, []);

  const handleError = (e) => {
    const el = e.currentTarget;
    const altSrc = logoSourcesTrans[current];
    if (el.src && !el.dataset._triedTrans) {
      el.dataset._triedTrans = "1";
      el.src = altSrc;
    }
  };

  return (
    <img
      className={`site-logo ${className} site-logo-${current}`}
      src={logoSources[current]}
      onError={handleError}
      alt="AK Machinery Solution"
      loading="lazy"
    />
  );
}
