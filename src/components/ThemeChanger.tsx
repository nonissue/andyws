import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/*
Notes:
- should honour system theme by default
- if changed, user pref stored in local storage
*/

export const ThemeChanger: React.FunctionComponent = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <button
        className="p-0 m-0 leading-none "
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
        <div
          className={`leading-none text-4xl sm:text-4xl md:text-5xl transition-colors duration-200 ${
            resolvedTheme == "light" ? "text-klimOrange hover:text-black" : "text-black hover:text-white"
          }`}
        >
          ☺︎
          {/* {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )} */}
        </div>
      </button>
    </div>
  );
};
