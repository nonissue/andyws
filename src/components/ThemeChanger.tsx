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
        className="px-4 py-2 text-white border dark:border-gray-300 text-xs w-44 mr-7 dark:text-black bg-black dark:bg-white font-semibold rounded-md"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Change Theme
      </button>
    </div>
  );
};
