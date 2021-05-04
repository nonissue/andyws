import NextLink from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { MenuTimeline, ThemeChanger } from "src/components";

const siteSubMenuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Source",
    href: "https://github.com/nonissue/non-www",
  },
];

const socialMediaItems = [
  {
    title: "Github",
    href: "https://www.github.com/nonissue",
  },
  {
    title: "Instagram",
    href: "https://instagram.com/nonissue",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/twitter",
  },
  {
    title: "Email",
    href: "mailto:andy@nonissue.org",
  },
];

type MenuPopoverProps = {
  open: boolean;
};

const MenuPopover = ({ open }: MenuPopoverProps) => {
  return (
    <div>
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
          className={`inset-x-0 z-10 transform absolute shadow-xl  backdrop-filter backdrop-blur-xl`}
        >
          <div className="absolute inset-0 flex" aria-hidden="true">
            <div className="bg-white w-1/2 dark:bg-black dark:border-r dark:border-gray-900" />
            <div className="bg-gray-50 w-1/2 dark:bg-black" />
          </div>
          <div className="relative max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2">
            <nav className="grid gap-y-10 px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
              <h2 id="solutionsHeading" className="sr-only">
                Site Navigation
              </h2>
              <div>
                <h3 className="text-lg font-semibold">Site</h3>
                <ul className="mt-3 space-y-3">
                  {siteSubMenuItems.map((item) => (
                    <li key={item.title}>
                      <NextLink href={item.href}>
                        <a>{item.title}</a>
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h3 className="text-lg font-semibold">Contact</h3>
                <ul className="mt-3 space-y-3">
                  {socialMediaItems.map((item) => (
                    <li key={item.title}>
                      <NextLink href={item.href}>
                        <a>{item.title}</a>
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            <div className=" px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <MenuTimeline />
              <div className="mt-10 text-sm font-medium text-right">
                <a href="#" className=" transition ease-in-out duration-150">
                  View more activity <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </div>
  );
};

const Header = () => {
  return (
    // bg-opacity-50 backdrop-filter backdrop-blur-lg
    // bg-gradient-to-br from-gray-50 to-gray-100 via-gray-200
    // dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 dark:via-gray-900
    // dark:shadow-xl dark:bg-gray-800
    <Popover as="header" className="z-0 relative">
      {({ open }) => (
        <div className={`relative z-10`}>
          {/* <div
            className={`absolute inset-0 ${
              !open ? "shadow-xl" : ""
            } z-30 pointer-events-none`}
            aria-hidden="true"
          /> */}
          {/* <Transition
            show={open}
            as={Fragment}
            enter="transition-opacity ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay
              static
              className={`bg-black fixed inset-0 bg-opacity-30`}
            />
          </Transition> */}
          <div className="relative z-10 inset-0">
            <div className="max-w-4xl mx-auto flex px-4 py-6 sm:px-6 lg:px-8 inset-0">
              <div className="absolute inset-0 flex" aria-hidden="true">
                <div className="bg-white w-1/2 dark:bg-black dark:border-r dark:border-gray-900" />
                <div className="bg-gray-50 w-1/2 dark:bg-black " />
              </div>

              <div className="relative flex items-center space-between w-full">
                <div className="flex-grow font-mono text-lg font-black">
                  NON
                </div>
                <ThemeChanger />
                <Popover.Button>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
            </div>
          </div>
          <MenuPopover open={open} />
        </div>
      )}
    </Popover>
  );
};

export { Header, MenuPopover };
