/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import NextLink from "next/link";

import { useSiteContext } from "src/lib/context";
import { ThemeChanger } from "./";

const LOGO_WIDTH = 75;
const LOGO_HEIGHT = 28;

const MobileNav = ({
  mobileMenuShown,
  toggleMobileMenu,
}: {
  mobileMenuShown: boolean;
  toggleMobileMenu: () => void;
}) => {
  const linkStyle = `text-gray-700 py-2 px-2 mr-0 block transition-all duration-100 hover:text-indigo-500 dark:text-gray-200 dark:hover:text-indigo-400`;

  return (
    <div
      className={`${
        mobileMenuShown || "hidden"
      }  max-w-4xl w-full mx-auto fixed left-0 right-0 bg-opacity-50 z-50 text-center border border-t-0 border-gray-200 border-opacity-100
      dark:border-gray-800  dark:border-opacity-100`}
    >
      <div
        className={`backdrop-filter backdrop-blur-lg relative top-full  py-2  shadow-sm dark:shadow-2xl bg-gray-50 dark:bg-gray-900 dark:bg-opacity-50 bg-opacity-50 `}
      >
        <div className="font-sans font-semibold text-xl text-gray-700 max-w-4xl mx-auto dark:text-gray-50">
          <div className="dark:bg-opacity-100 rounded-sm ">
            <NextLink href="/about">
              <a onClick={toggleMobileMenu} className={linkStyle}>
                About
              </a>
            </NextLink>
            <NextLink href="/contact">
              <a onClick={toggleMobileMenu} className={linkStyle}>
                Contact
              </a>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const Nav: React.FunctionComponent = () => {
  const { state } = useSiteContext();
  const { updateState } = useSiteContext();

  const [mounted, setMounted] = useState(false);
  const [mobileMenuShown, setMobileMenuShown] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuShown((mobileMenuShown) => !mobileMenuShown);
  };

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const update = async () => {
      await updateState((state) => ({
        ...state,
        isLoading: false,
      }));
    };

    update();

    console.log(state);
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <div
        className={`sticky z-30 h-auto top-0 left-0 right-0 max-w-4xl w-full mx-auto bg-opacity-50 border-b border-r border-l backdrop-filter backdrop-blur-lg bg-white border-gray-900 border-opacity-10
                    bg-gradient-to-br from-gray-50 to-gray-100 via-gray-200
                    dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 dark:via-gray-900  
                    dark:shadow-xl dark:bg-gray-800 dark:bg-opacity-50 dark:border-gray-100 dark:border-opacity-5`}
      >
        <div className="max-w-4xl w-full mx-auto relative top-0 left-0 flex items-center px-6 py-4 lg:py-6 lg:px-6">
          <div className="flex flex-grow">
            {mounted && (
              <NextLink href="/">
                <a
                  style={{ height: `${LOGO_HEIGHT * 1.2}px` }}
                  onClick={() => setMobileMenuShown(false)}
                >
                  {(theme === "light" || resolvedTheme === "light") && (
                    <Image
                      src="/logo-light.svg"
                      alt="nonissue logo"
                      width={`${LOGO_WIDTH * 1.2}`}
                      height={`${LOGO_HEIGHT * 1.3}`}
                      className="opacity-80"
                    />
                  )}
                  {(theme === "dark" || resolvedTheme === "dark") && (
                    <Image
                      src="/logo-dark.svg"
                      alt="nonissue logo"
                      width={`${LOGO_WIDTH * 1.2}`}
                      height={`${LOGO_HEIGHT * 1.2}`}
                      className="opacity-80"
                    />
                  )}
                </a>
              </NextLink>
            )}
          </div>

          <ThemeChanger />

          <div className="relative z-50">
            <button
              className="p-2 rounded-full transition-all duration-500 text-gray-600 border-0 border-gray-200 bg-transparent 
            dark:border-gray-500 mr-1 dark:text-gray-300 dark:bg-transparent
            hover:bg-gray-100 dark:hover:bg-gray-800 "
              onClick={() => toggleMobileMenu()}
            >
              <div className="relative w-6 h-6 p-0">
                <div
                  className={`${
                    (mobileMenuShown && "block") || "block"
                  } dark:text-gray-300 text-gray-700`}
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
              </div>
            </button>
          </div>
        </div>
      </div>
      <div>
        <MobileNav
          mobileMenuShown={mobileMenuShown}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </>
  );
};

export { Nav };
