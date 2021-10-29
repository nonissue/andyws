import Link from "next/link";
import { NewHeaderLink, ThemeChanger } from "@/components";
import SiteConfig from "@/data/site.config.json";

const NewHeader = () => {
  // use buttonRef to close popover when menu link is tapped/clicked

  return (
    <div className="z-10 relative shadow-sm">
      <div className="relative z-20 inset-0">
        <div className="max-w-3xl mx-auto flex px-6 py-2 sm:px-6 lg:px-8 lg:py-2 inset-0 ">
          <div className="absolute inset-0 flex" aria-hidden="true">
            <div className="bg-white w-3/5 dark:bg-almostblack" />
            <div className="bg-white w-2/5 dark:bg-bluegray-900 dark:brightness-75 lg:bg-gray-50" />
          </div>

          <div className="relative flex items-center space-between w-full">
            <div className="flex-grow font-display uppercase text-md sm:text-xl md:text-3xl  text-almostblack dark:text-gray-50">
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
            <NewHeaderLink href="#" title="Projects" />
            <span className="text-sm sm:text-lg font-light opacity-30">
              &nbsp;•&nbsp;
            </span>
            {/* <NewHeaderLink href="/contact" title="Contact" /> */}
            <NewHeaderLink href="/about" title="About" />
            {/* <div className="font-display2 item-start flex-shrink font-medium tracking-wide uppercase text-xxs sm:text-xs border border-dotted  border-gray-300 text-gray-600 dark:border-gray-600  py-0 px-0.5 sm:px-1  ml-3 dark:text-gray-400 ">
              <Link href="/WIP">beta</Link>
            </div> */}
            <ThemeChanger />
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewHeader };
