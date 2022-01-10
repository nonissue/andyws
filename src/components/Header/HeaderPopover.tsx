import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { HeaderLink, HeaderTimeline } from '@/components';

type HeaderDataItem = {
  title: string;
  href: string;
};

type HeaderData = {
  nav: {
    subMenuItems: HeaderDataItem[];
    socialMediaItems: HeaderDataItem[];
  };
};

type HeaderPopoverProps = {
  open: boolean;
  closePopover: () => void;
  data: HeaderData;
};

const HeaderPopover = ({ open, closePopover, data }: HeaderPopoverProps) => {
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
        className={`inset-x-0 transform absolute z-20 shadow-lg dark:shadow-2xl lg:dark:border-t-2 dark:border-opacity-60 dark:border-gray-900 `}
      >
        <div
          className="flex absolute inset-0 border-b dark:border-gray-900/90"
          aria-hidden="true"
        >
          <div className="w-3/5 bg-white dark:bg-almostblack" />
          <div className="w-2/5 bg-white dark:bg-almostblack lg:bg-gray-50" />
        </div>
        <div className="grid relative grid-cols-1 pb-2 mx-auto max-w-3xl md:pb-0 lg:grid-cols-1">
          <nav
            className="grid gap-y-6 py-4 px-6 sm:grid-cols-3 sm:gap-x-8 sm:py-12 sm:px-6 md:gap-y-10 md:pt-8 lg:px-8 xl:pr-12"
            aria-labelledby="site nav"
          >
            <h2 id="solutionsHeading" className="sr-only">
              Site Navigation
            </h2>
            <div>
              <h3 className="text-lg font-semibold">Site</h3>
              <ul className="mt-2 space-y-2 md:space-y-3">
                {data.nav.subMenuItems.map((item) => (
                  <HeaderLink
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    closePopover={closePopover}
                  />
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Connect</h3>
              <ul className="mt-2 space-y-2 md:space-y-3">
                {data.nav.socialMediaItems.map((item) => (
                  <HeaderLink
                    title={item.title}
                    href={item.href}
                    closePopover={closePopover}
                    key={item.title}
                  />
                ))}
              </ul>
            </div>
          </nav>
          <div className="py-4 px-6 sm:py-3 sm:px-6 md:pt-8 lg:py-8 xl:pr-12">
            <h3 className="inline overflow-hidden relative py-1 font-label_mono text-xs font-light leading-tight text-left text-gray-500 dark:text-gray-200 opacity-90 md:col-span-3 md:mx-0 md:mt-0 md:max-w-none md:text-xs">
              * – Work in Progress
            </h3>
          </div>
          {false && (
            <div className="block py-4 px-6 opacity-100 sm:py-12 sm:px-6 md:block lg:px-8 lg:pt-8 xl:pl-12">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <HeaderTimeline />
              <div className="mt-10 text-sm font-medium text-right">
                <a
                  href="#"
                  className="dark:text-indigo-300 transition duration-150 ease-in-out"
                >
                  View more activity <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export { HeaderPopover };
