import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import NextLink from "next/link";

import { ThemeChanger } from "./";

export const Header: React.FunctionComponent = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuShown, setMobileMenuShown] = useState(false);
  const { theme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuShown(!mobileMenuShown);
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="container px-6 lg:px-10 py-6 mx-auto">
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

        <input type="text"></input>

        <button className="py-1 px-0 mr-4 font-semibold border-b border-gray-300 dark:border-gray-700 hidden md:block ">
          Menu
        </button>
        <NextLink href="/">
          <a className="py-1 px-0 mr-4 font-semibold border-b border-gray-300 dark:border-gray-700 hidden md:block ">
            Home
          </a>
        </NextLink>
        <NextLink href="/about">
          <a className="py-1 px-0 mr-4 font-semibold border-b border-gray-300 dark:border-gray-700 hidden md:block ">
            About
          </a>
        </NextLink>
        <ThemeChanger />

        {/* 
        Condensed mobile nav 
        */}
        <div className="relative">
          <button
            className="p-2 md:hidden focus:outline-none rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-500 text-gray-900 border-0 border-gray-200 dark:border-gray-700 mr-3 dark:text-gray-200 dark:bg-transparent"
            onClick={() => toggleMobileMenu()}
          >
            <div className="w-6 h-6 relative top-0 left-0 overflow-hidden">
              <Transition
                show={!mobileMenuShown}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className={`absloute top-0  inset-x-0 w-6 h-6`}>
                  {/* Heroicon menu icon */}
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
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </div>
              </Transition>

              <Transition
                show={mobileMenuShown}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                unmount={false}
              >
                <div className="absolute bg-transparent  top-0  inset-x-0 w-6 h-6 ">
                  {/* Heroicon X icon */}
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </Transition>
            </div>
          </button>
          <Transition
            show={mobileMenuShown}
            enter="transition duration-1000"
            enterFrom="opacity-90 z-50"
            enterTo="opacity-100 z-50"
            leave="transition duration-100"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 -translate-x-full"
          >
            <div className="absolute p-2 top-50 z-20 right-2 w-60 h-48 bg-black">
              Hi
            </div>
          </Transition>
        </div>
      </div>
    </div>
  );
};
