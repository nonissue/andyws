import { Fragment, useRef } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { HeaderPopover, ThemeChanger } from "src/components";
import SiteConfig from "data/site.config.json";

const Header = () => {
  // use buttonRef to close popover when menu link is tapped/clicked
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonClick = () => buttonRef.current?.click();

  return (
    <Popover as="header" className="z-10 relative shadow-sm">
      {({ open }) => (
        <div className={`relative z-20`}>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 "
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay
              static
              className={`${"bg-white dark:bg-almostblack fixed inset-0 bg-opacity-80 dark:bg-opacity-80"}`}
            />
          </Transition>
          <div className="relative z-20 inset-0">
            <div className="max-w-4xl mx-auto flex px-6 py-2 sm:px-6 lg:px-8 lg:py-6 inset-0">
              <div className="absolute inset-0 flex" aria-hidden="true">
                <div className="bg-white w-1/2 dark:bg-almostblack lg:dark:border-r-0 dark:border-gray-900 border-r-0 100" />
                <div className="bg-white w-1/2 dark:bg-almostblack lg:bg-gray-50 " />
              </div>

              <div className="relative flex items-center space-between w-full">
                <div className="flex-grow font-display uppercase text-xl text-almostblack dark:text-gray-50">
                  <Link href="/">
                    <a className="tracking-normal">
                      <span className=" font-bold ">andy</span>
                      <span className=" font-sans text-gray-600 ">.</span>
                      <span className="text-opacity-50 text-gray-400 font-mono text-base ">
                        ws
                      </span>
                    </a>
                  </Link>
                </div>

                <ThemeChanger />
                <Popover.Button
                  ref={buttonRef}
                  aria-label="Navigation Toggle"
                  className="p-2"
                >
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
            </div>
          </div>

          {/* Pass closePopover function to panel */}
          <HeaderPopover
            open={open}
            closePopover={buttonClick}
            data={SiteConfig}
          />
        </div>
      )}
    </Popover>
  );
};

export { Header };
