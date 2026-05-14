const nextPreference = {
  system: "light",
  light: "dark",
  dark: "system",
};

const preferenceLabels = {
  system: "Use system color mode",
  light: "Use light color mode",
  dark: "Use dark color mode",
};

export default function ThemeToggle({ preference, onPreferenceChange }) {
  const next = nextPreference[preference] || "system";

  return (
    <button
      className={`theme-toggle theme-toggle-${preference}`}
      type="button"
      aria-label={`${preferenceLabels[preference]}. Switch to ${next} mode.`}
      title={preferenceLabels[preference]}
      onClick={() => onPreferenceChange(next)}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        <svg className="theme-icon theme-sun" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
        <svg className="theme-icon theme-moon" viewBox="0 0 24 24">
          <path d="M20.99 14.72A8 8 0 1 1 9.28 3.01 6.8 6.8 0 0 0 20.99 14.72Z" />
        </svg>
        <svg className="theme-icon theme-system" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8" />
          <path d="M12 16v4" />
        </svg>
      </span>
    </button>
  );
}
