import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const ThemeChanger: React.FunctionComponent = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="">
      <button
        className="px-2 py-1 capitalize text-gray-700 border-2 border-gray-200 dark:border-gray-700 text-sm w-10 mr-7 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 font-light shadow-sm rounded-md font-mono"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? "🌛" : "☀️"}
      </button>
    </div>
  );
};
