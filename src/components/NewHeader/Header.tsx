import Link from 'next/link';
import { NewHeaderLink, ThemeChanger } from '@/components';

const NewHeader = () => {
  return (
    <div className="relative z-10 dark:border-b dark:border-gray-900 shadow-sm">
      <div className="relative inset-0 z-20">
        <div className="flex inset-0 py-2 px-6 mx-auto max-w-3xl sm:px-6 lg:py-2 lg:px-8">
          <div className="flex relative justify-between items-center w-full">
            <div className="grow font-display">
              <Link href="/">
                <a className=" flex items-center">
                  <div className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-xl md:text-2xl">
                    andy
                  </div>
                  <div className="font-display text-xs tracking-tight text-gray-500 dark:text-gray-400 sm:text-base">
                    <span className="text-gray-500">.</span>ws
                  </div>
                </a>
              </Link>
            </div>
            <NewHeaderLink href="/projects" title="Projects" />
            <span className="text-sm font-light opacity-30 sm:text-lg">
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <NewHeaderLink href="/contact" title="Contact" />
            &nbsp;&nbsp;
            <ThemeChanger />
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewHeader };
