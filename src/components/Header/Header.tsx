import Link from 'next/link';
import { ThemeChanger } from '@/components';

const Header = () => {
  return (
    <div className="z-10 relative ">
      <div className="relative z-20 inset-0">
        <div className="max-w-3xl mx-auto flex px-6 py-2 sm:px-6 lg:px-8 lg:py-2 inset-0 ">
          <div className="relative flex items-center space-between w-full">
            <div className="flex-grow font-display ">
              <Link href="/">
                <a className=" flex items-center">
                  <div className="font-bold tracking-tight text-lg sm:text-xl md:text-2xl text-gray-900 dark:text-gray-50">
                    andy
                  </div>
                  <div className="tracking-tight text-opacity-80 first-letter:text-opacity-100 text-gray-900 font-display  dark:text-gray-400 text-xs sm:text-base">
                    .ws
                  </div>
                </a>
              </Link>
            </div>
            {/* <HeaderLink href="/projects" title="Projects" /> */}
            <span className="text-sm sm:text-lg font-light opacity-30">
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            {/* <HeaderLink href="/contact" title="Contact" /> */}
            &nbsp;&nbsp;
            <ThemeChanger />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
