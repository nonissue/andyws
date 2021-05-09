import { Fragment, useRef } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { MenuTimeline, ThemeChanger, WrappedNextLink } from "src/components";
import SiteConfig from "src/data/site.config.json";

type MenuPopoverProps = {
  open: boolean;
  closePopover: () => void;
};

const MenuPopover = ({ open, closePopover }: MenuPopoverProps) => {
  return (
    <Transition
      show={open}
      as={Fragment}
      enter="transition ease-in-out duration-200"
      enterFrom="opacity-0 -translate-y-2 "
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0 "
      leaveTo="opacity-0 -translate-y-2"
    >
      <Popover.Panel
        static
        className={`inset-x-0 transform absolute z-20 shadow-xl lg:dark:border-t-2 lg:dark:border-gray-900`}
      >
        <div className="absolute inset-0 flex" aria-hidden="true">
          <div className="bg-white w-1/2 dark:bg-almostblack lg:dark:border-r-2 dark:border-gray-900 border-r-0 " />
          <div className=" w-1/2 dark:bg-almostblack bg-white lg:bg-gray-50" />
        </div>
        <div className="relative max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          <nav
            className="grid gap-y-10 px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
            aria-labelledby="site nav"
          >
            <h2 id="solutionsHeading" className="sr-only">
              Site Navigation
            </h2>
            <div>
              <h3 className="text-lg font-semibold">Site</h3>
              <ul className="mt-3 space-y-3">
                {SiteConfig.nav.subMenuItems.map((item) => (
                  <li key={item.title} className="">
                    <button
                      onClick={() => closePopover()}
                      className=""
                      tabIndex={-1}
                    >
                      <WrappedNextLink href={item.href}>
                        {item.title}
                      </WrappedNextLink>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h3 className="text-lg font-semibold">Connect</h3>
              <ul className="mt-3 space-y-3">
                {SiteConfig.nav.socialMediaItems.map((item) => (
                  <li key={item.title}>
                    <Popover.Button as="div" className="appearance-none">
                      <Link href={item.href}>
                        <a>{item.title}</a>
                      </Link>
                    </Popover.Button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className=" px-4 py-8 pt-2 lg:pt-12 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            <MenuTimeline />
            <div className="mt-10 text-sm font-medium text-right">
              <a
                href="#"
                className=" transition ease-in-out duration-150 dark:text-indigo-300"
              >
                View more activity <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

const Header = () => {
  // use buttonRef to close popover when menu link is tapped/clicked
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonClick = () => buttonRef.current?.click();

  return (
    <Popover as="header" className="z-10 relative">
      {({ open }) => (
        <div className={`relative z-20`}>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 "
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay
              static
              className={`${"bg-white dark:bg-almostblack fixed inset-0 bg-opacity-80 dark:bg-opacity-50 backdrop-filter backdrop-blur-none"}`}
            />
          </Transition>
          <div className="relative z-20 inset-0">
            <div className="max-w-4xl mx-auto flex px-4 py-6 sm:px-6 lg:px-8 inset-0">
              <div className="absolute inset-0 flex" aria-hidden="true">
                <div className="bg-white w-1/2 dark:bg-almostblack lg:dark:border-r-0 dark:border-gray-900 border-r-0 100" />
                <div className="bg-white w-1/2 dark:bg-almostblack lg:bg-gray-50 " />
              </div>

              <div className="relative flex items-center space-between w-full">
                <div className="flex-grow font-display text-lg text-almostblack  dark:text-gray-50 font-bold">
                  <WrappedNextLink href="/">ANDY.WS</WrappedNextLink>
                </div>

                <ThemeChanger />
                <Popover.Button ref={buttonRef}>
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
          <MenuPopover open={open} closePopover={buttonClick} />
        </div>
      )}
    </Popover>
  );
};

export { Header, MenuPopover };
