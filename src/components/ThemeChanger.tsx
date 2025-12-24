import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/*
Notes:
- should honour system theme by default
- if changed, user pref stored in local storage
*/

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
    console.log(`resolvedTheme: ${resolvedTheme}`);
    console.log(`theme: ${theme}`);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {/* ☺ */}
      <button
        className="m-0 p-0 leading-none"
        onClick={() => {
          // for some reason, if theme is light, setTheme doesn't
          // change theme to dark on first use unless we use the logic below
          let nextTheme;
          if (theme === "system") {
            nextTheme = resolvedTheme === "light" ? "dark" : "light";
          } else {
            nextTheme = theme === "light" ? "dark" : "light";
          }

          setTheme(nextTheme);
        }}
        aria-label="Theme Toggle"
      >
        <span
          role="img"
          aria-label="attribution"
          className="inline-block text-4xl leading-none text-transparent transition-all duration-300 ease-in emoji-shadow hover:emoji-shadow-hover sm:text-4xl md:text-5xl"
        >
          💯
        </span>
      </button>
    </div>
  );
}
