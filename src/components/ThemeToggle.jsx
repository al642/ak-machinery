const themeOptions = [
  ["system", "Auto"],
  ["light", "Light"],
  ["dark", "Dark"],
];

export default function ThemeToggle({ preference, onPreferenceChange }) {
  return (
    <div className="theme-toggle" aria-label="Color mode selector">
      {themeOptions.map(([value, label]) => (
        <button
          key={value}
          type="button"
          className={preference === value ? "active" : ""}
          aria-pressed={preference === value}
          onClick={() => onPreferenceChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
