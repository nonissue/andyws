import { Fragment, useRef } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { HeaderPopover, ThemeChanger } from '@/components';
import SiteConfig from '@/data/site.config.json';

const Header = () => {
  // use buttonRef to close popover when menu link is tapped/clicked
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonClick = () => buttonRef.current?.click();

  return (
    <Popover as="header" className="relative z-10 shadow-sm">
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
              className={`${'bg-white dark:bg-almostblack fixed inset-0 bg-opacity-80 dark:bg-opacity-80'}`}
            />
          </Transition>
          <div className="relative inset-0 z-20">
            <div className="flex inset-0 py-2 px-6 mx-auto max-w-3xl sm:px-6 lg:py-2 lg:px-8">
              <div className="flex absolute inset-0" aria-hidden="true">
                <div className="w-3/5 bg-white dark:bg-almostblack" />
                <div className="w-2/5 bg-white dark:bg-slate-900 dark:brightness-75 lg:bg-gray-50" />
              </div>

              <div className="flex relative justify-between items-center w-full">
                <div className="grow font-display text-xl text-almostblack dark:text-gray-50 uppercase">
                  <Link href="/">
                    <a className="tracking-normal">
                      <span className=" font-bold ">andy</span>
                      <span className=" font-sans text-gray-600 ">.</span>
                      <span className="font-mono text-base text-gray-400/50">
                        ws
                      </span>
                    </a>
                  </Link>
                </div>
                <div className="shrink items-start py-0 px-1 mr-3 font-display2 text-xs font-medium tracking-wide text-gray-600 dark:text-gray-400 uppercase border border-gray-300 dark:border-gray-600 border-dashed">
                  <Link href="/WIP">beta</Link>
                </div>
                <ThemeChanger />
                <Popover.Button
                  ref={buttonRef}
                  aria-label="Navigation Toggle"
                  className="p-2"
                  id="toggle-popover"
                >
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
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
