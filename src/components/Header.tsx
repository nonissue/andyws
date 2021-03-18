/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState, useLayoutEffect } from "react";
import { useTheme } from "next-themes";
import { Transition } from "@headlessui/react";
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
  // if (!mobileMenuShown) {
  //   return null;
  // }

  // useLockBodyScroll();

  return (
    <div className="absolute top-0 left-0 z-0">
      <Transition
        appear={true}
        show={mobileMenuShown}
        enter="transition duration-300 transform"
        enterFrom="opacity-0"
        enterTo="opacity-100 "
        leave="transition duration-500 "
        leaveFrom="opacity-100 "
        leaveTo="opacity-0 "
        // beforeLeave={() => {
        //   window.confirm("Are you sure?");
        // }}
        unmount={true}
      >
        <div className="absolute top-0 h-screen font-sans font-semibold text-lg py-4  left-0  px-2 rounded-2xl shadow-xl w-screen bg-gray-200 dark:bg-gray-900 text-gray-700 ring-1 ring-black ring-opacity-5  focus:outline-none  dark:text-gray-50">
          <div className="py-2 mt-24 dark:bg-opacity-90 rounded-2xl dark:bg-black bg-gray-50  bg-opacity-90 ">
            <NextLink href="/">
              <a
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                onClick={toggleMobileMenu}
                className="py-2 my-2 px-6 mr-0 rounded-2xl transition-all duration-100 lg:border-gray-300 dark:border-gray-700 block hover:bg-pink-200 dark:hover:bg-fuchsia-500 dark:hover:bg-opacity-50 ring-opacity-0 ring-4 ring-transparent dark:ring-4 ring-inset dark:ring-transparent dark:hover:ring-fuchsia-400 hover:ring-4 hover:ring-fuchsia-400  dark:ring-opacity-50 dark:hover:ring-opacity-90"
              >
                Index
              </a>
            </NextLink>
            <NextLink href="/about">
              <a
                onClick={toggleMobileMenu}
                className="py-2 px-6 my-2  mr-0 rounded-2xl transition-all duration-100 lg:border-gray-300 dark:border-gray-700 block hover:bg-pink-200 dark:hover:bg-fuchsia-500 dark:hover:bg-opacity-50 ring-opacity-0 ring-transparent ring-4 dark:ring-4 ring-inset dark:ring-transparent dark:hover:ring-fuchsia-400 hover:ring-4 hover:ring-fuchsia-400  dark:ring-opacity-50 dark:hover:ring-opacity-90"
              >
                Activity
              </a>
            </NextLink>
            <NextLink href="/about">
              <a
                onClick={toggleMobileMenu}
                className="py-2 px-6 my-2  mr-0 rounded-2xl transition-all duration-100 lg:border-gray-300 dark:border-gray-700 block hover:bg-pink-200 dark:hover:bg-fuchsia-500 dark:hover:bg-opacity-50 ring-opacity-0 ring-4 ring-transparent dark:ring-4 ring-inset dark:ring-transparent dark:hover:ring-fuchsia-400 hover:ring-4 hover:ring-fuchsia-400  dark:ring-opacity-50 dark:hover:ring-opacity-90"
              >
                About
              </a>
            </NextLink>
          </div>
        </div>
      </Transition>
    </div>
  );
};

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
    <div
      className={`container sticky bg-white dark:bg-gray-900 z-50 top-0 px-6 lg:px-10 py-6 mx-auto`}
    >
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

        {/* <button className="py-1 px-0 mr-4 font-semibold border-b border-gray-300 dark:border-gray-700  md:block ">
          Menu
        </button> */}
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

        <input
          type="text"
          className="w-20 hidden lg:block lg:w-48 h-8 mr-5 border border-gray-200 dark:bg-gray-900 dark:border-gray-700"
        ></input>
        <ThemeChanger />

        {/* 
        Condensed mobile nav 
        */}
        <div className=" right-0 top-0 z-50">
          <button
            className="p-2 md:hidden focus:outline-none rounded-full mr-3 outline-none hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-500 text-gray-900 border-0 border-gray-200 dark:border-gray-700 dark:text-gray-200 dark:bg-transparent"
            onClick={() => toggleMobileMenu()}
          >
            <div className="relative w-6 h-6 p-0">
              <Transition
                show={!mobileMenuShown}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                unmount={true}
              >
                <div
                  className={`absloute top-0 inset-x-0 ${
                    mobileMenuShown && "hidden" && false
                  }`}
                >
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
                enter="transition duration-300"
                enterFrom="opacity-0 "
                enterTo="opacity-100"
                leave="transition-opacity duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-100"
                unmount={true}
                // appear={true}
              >
                <div className="absolute bg-transparent z-50 w-6 h-6 top-0 right-0">
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
        </div>
        <MobileNav
          mobileMenuShown={mobileMenuShown}
          toggleMobileMenu={toggleMobileMenu}
        />
        {mobileMenuShown && <ScrollLock />}
      </div>
    </div>
  );
};
