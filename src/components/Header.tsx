import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import { ThemeChanger } from "./";

export const Header: React.FunctionComponent = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="px-4 py-6 mx-auto">
      <div className="flex items-center border-0 mt-8 mx-0">
        <div className="w-full border-0 flex justify-start">
          {/* Change image based on theme */}
          <Image
            src={`/logo-${theme}.svg`}
            alt="nonissue logo"
            width={`${75 * 1.5}`}
            height={`${28 * 1.5}`}
            className="bg-gradient-to-t from-pink-200 via-pink-100 to-pink-200  dark:from-fuchsia-700 dark:via-fuchsia-600 dark:to-fuchsia-700"
          />
        </div>

        <ThemeChanger />

        <div className="text-gray-800 hover:text-pink-400 cursor-pointer dark:text-white dark:hover:text-pink-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
