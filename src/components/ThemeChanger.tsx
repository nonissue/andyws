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
    console.log(`resolvedTheme: ${resolvedTheme}`);
    console.log(`theme: ${theme}`);
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
          className={`leading-none text-4xl sm:text-4xl md:text-5xl transition-colors  ease-in duration-300 ${
            resolvedTheme == "light"
              ? "text-klimOrange hover:text-black"
              : "text-black hover:text-white"
          }`}
        >
          ☺︎
        </div>
      </button>
    </div>
  );
};
