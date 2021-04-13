/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

// https://windstrap.netlify.app/#navbar
// https://github.com/jkytoela/next-startd
// https://github.com/ndimatteo/HULL

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import NextLink from "next/link";

import { useSiteContext } from "src/lib/context";
import { ThemeChanger } from "./";

const MobileNav = ({
  mobileMenuShown,
  toggleMobileMenu,
}: {
  mobileMenuShown: boolean;
  toggleMobileMenu: () => void;
}) => {
  const linkStyle = `text-gray-700 py-4 px-2 mr-0 block transition-all duration-100 hover:bg-gray-300 hover:bg-opacity-30 dark:text-gray-200 dark:hover:bg-gray-500 dark:hover:bg-opacity-40`;

  return (
    <div
      className={`${
        mobileMenuShown || "hidden"
      }  inline-block mx-0 absolute top-0 left-0 text-center bg-clip-padding py-0 right-0 bg-white bg-opacity-80 shadow-lg backdrop-filter backdrop-blur-xl backdrop-saturate-200 border-white border-opacity-90 md:hidden dark:bg-gray-900 dark:bg-opacity-70`}
    >
      <div className={``}>
        {/* ring-1 ring-black ring-opacity-5 focus:outline-none */}
        <div className="font-sans font-semibold text-xl text-gray-700  dark:text-gray-50">
          <div className="dark:bg-opacity-90 rounded-sm  ">
            <NextLink href="/">
              <a onClick={toggleMobileMenu} className={linkStyle}>
                Index
              </a>
            </NextLink>
            <NextLink href="/about">
              <a onClick={toggleMobileMenu} className={linkStyle}>
                Activity
              </a>
            </NextLink>
            <NextLink href="/about">
              <a onClick={toggleMobileMenu} className={linkStyle}>
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
  const { state } = useSiteContext();
  const { updateState } = useSiteContext();

  // const [mounted, setMounted] = useState(false);
  const [mobileMenuShown, setMobileMenuShown] = useState(false);
  const { theme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuShown((mobileMenuShown) => !mobileMenuShown);
  };

  // When mounted on client, now we can show the UI
  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  // if (!mounted) return null;

  useEffect(() => {
    const update = async () => {
      await updateState((state) => ({
        ...state,
        isLoading: false,
      }));
    };

    setTimeout(() => {
      update();
    }, 3000);
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div
      className={`container sticky z-30 h-auto top-0 lg:px-10 pt-6 pb-1 mx-auto bg-white bg-opacity-95 backdrop-filter backdrop-blur-3xl shadow-sm dark:bg-gray-900 dark:bg-opacity-80 `}
    >
      <div className="flex items-center mt-0 mx-4">
        <div className="w-full border-0 flex justify-start">
          {/* Change image based on theme */}
          <Image
            src={`/logo-${theme ? theme : "light"}.svg`}
            alt="nonissue logo"
            width={`${75 * 1.5}`}
            height={`${28 * 1.5}`}
          />
        </div>

        <div className="hidden md:block">
          <NextLink href="/">
            <a className="py-1 px-0 mr-4 font-semibold border-b border-gray-300 dark:border-gray-700  ">
              Home
            </a>
          </NextLink>
          <NextLink href="/about">
            <a className="py-1 px-0 mr-4 font-semibold border-b border-gray-300 dark:border-gray-700  ">
              About
            </a>
          </NextLink>
        </div>

        <ThemeChanger />

        <div className="relative md:hidden z-50">
          <button className="p-2 " onClick={() => toggleMobileMenu()}>
            <div className="relative  w-6 h-6 p-0">
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
        {/* {mobileMenuShown && <ScrollLock />} */}
      </div>
    </div>
  );
};
