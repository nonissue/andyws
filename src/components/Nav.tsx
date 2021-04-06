/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

// https://windstrap.netlify.app/#navbar
// https://github.com/jkytoela/next-startd
// https://github.com/ndimatteo/HULL

import { useEffect, useState, useLayoutEffect } from "react";
import { useTheme } from "next-themes";
// import { Transition } from "@headlessui/react";
import Image from "next/image";
import NextLink from "next/link";

import { ThemeChanger } from "./";

function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []); // Empty array ensures effect is only run on mount and unmount
}

const ScrollLock = () => {
  useLockBodyScroll();

  return <></>;
};

const MobileNav = ({
  mobileMenuShown,
  toggleMobileMenu,
}: {
  mobileMenuShown: boolean;
  toggleMobileMenu: () => void;
}) => {
  const linkStyle = `text-gray-700 py-4 px-2 mr-0 block transition-all duration-300 hover:bg-gray-300 hover:bg-opacity-30`;

  return (
    <div
      className={`${
        mobileMenuShown || "hidden"
      }  inline-block mx-0 absolute top-0 left-0 text-center bg-clip-padding border-0 py-0 right-0 z-0 bg-white bg-opacity-80 shadow-sm backdrop-filter backdrop-blur-3xl backdrop-saturate-200 border-white border-opacity-90`}
    >
      {/* <div
      className={`${
        mobileMenuShown || "hidden"
      } inline-block mx-4 left-0 right-0 fixed z-10 bg-white shadow-lg bg-opacity-60 backdrop-filter backdrop-blur-lg`}
    > */}
      <div className={``}>
        {/* ring-1 ring-black ring-opacity-5 focus:outline-none */}
        <div className="font-sans font-semibold text-xl  dark:bg-gray-900 text-gray-700  dark:text-gray-50">
          <div className="dark:bg-opacity-90 rounded-sm dark:bg-black  ">
            <NextLink href="/">
              <a
                onClick={toggleMobileMenu}
                //  lg:border-gray-300 dark:border-gray-700 block hover:bg-pink-200 dark:hover:bg-fuchsia-500 dark:hover:bg-opacity-50 ring-opacity-0 ring-4 ring-transparent dark:ring-4 ring-inset dark:ring-transparent dark:hover:ring-fuchsia-400 hover:ring-4 hover:ring-fuchsia-400 dark:ring-opacity-50 dark:hover:ring-opacity-90
                className={linkStyle}
              >
                Index
              </a>
            </NextLink>
            <NextLink href="/about">
              <a
                onClick={toggleMobileMenu}
                //  lg:border-gray-300 dark:border-gray-700 block hover:bg-pink-200 dark:hover:bg-fuchsia-500 dark:hover:bg-opacity-50 ring-opacity-0 ring-4 ring-transparent dark:ring-4 ring-inset dark:ring-transparent dark:hover:ring-fuchsia-400 hover:ring-4 hover:ring-fuchsia-400 dark:ring-opacity-50 dark:hover:ring-opacity-90
                className={linkStyle}
              >
                Activity
              </a>
            </NextLink>
            <NextLink href="/about">
              <a
                onClick={toggleMobileMenu}
                //  lg:border-gray-300 dark:border-gray-700 block hover:bg-pink-200 dark:hover:bg-fuchsia-500 dark:hover:bg-opacity-50 ring-opacity-0 ring-4 ring-transparent dark:ring-4 ring-inset dark:ring-transparent dark:hover:ring-fuchsia-400 hover:ring-4 hover:ring-fuchsia-400 dark:ring-opacity-50 dark:hover:ring-opacity-90
                className={linkStyle}
              >
                About
              </a>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Nav: React.FunctionComponent = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuShown, setMobileMenuShown] = useState(false);
  const { theme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuShown((mobileMenuShown) => !mobileMenuShown);
  };

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className={`container sticky z-50 h-auto top-0 lg:px-10 pt-6 pb-1 mx-auto bg-white bg-opacity-95 backdrop-filter backdrop-blur-3xl shadow-xl dark:bg-gray-900 `}
    >
      <div className="flex items-center border-0 mt-0 mx-4">
        <div className="w-full border-0 flex justify-start">
          {/* Change image based on theme */}
          <Image
            src={`/logo-${theme ? theme : "light"}.svg`}
            alt="nonissue logo"
            width={`${75 * 1.5}`}
            height={`${28 * 1.5}`}
            className="bg-gradient-to-t from-pink-200 via-pink-100 to-pink-200  dark:from-fuchsia-700 dark:via-fuchsia-600 dark:to-fuchsia-700"
          />
        </div>

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

        <div className="relative z-50">
          <button className="" onClick={() => toggleMobileMenu()}>
            <div className="relative w-6 h-6 p-0">
              <div className={`${mobileMenuShown && "hidden" && false}`}>
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

              {/* Heroicon X icon */}
              {/* <div className="absolute bg-transparent z-50 w-6 h-6 top-0 right-0">
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
              </div> */}
            </div>
          </button>
        </div>
      </div>
      <div className="relative top-0 left-0 right-0 z-50 my-4 ">
        <MobileNav
          mobileMenuShown={mobileMenuShown}
          toggleMobileMenu={toggleMobileMenu}
        />
        {/* Can disable this? */}
        {mobileMenuShown && <ScrollLock />}
      </div>

      <div className="hidden">
        <h3>Test</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </p>
      </div>
    </div>
  );
};
