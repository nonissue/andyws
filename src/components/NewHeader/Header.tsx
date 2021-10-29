import Link from "next/link";
import { NewHeaderLink, ThemeChanger } from "@/components";

const NewHeader = () => {
  return (
    <div className="z-10 relative shadow-sm">
      <div className="relative z-20 inset-0">
        <div className="max-w-3xl mx-auto flex px-6 py-2 sm:px-6 lg:px-8 lg:py-2 inset-0 ">
          <div className="relative flex items-center space-between w-full">
            <div className="flex-grow font-display2 uppercase text-md sm:text-xl md:text-2xl text-almostblack dark:text-gray-50">
              <Link href="/">
                <a className="">
                  <span className="font-normal tracking-widest">andy</span>
                  <span className=" font-sans text-gray-600 ">.</span>
                  <span className="text-opacity-50 text-gray-400 font-mono text-base tracking-tight">
                    ws
                  </span>
                </a>
              </Link>
            </div>
            <NewHeaderLink href="/WIP" title="Projects" />
            <span className="text-sm sm:text-lg font-light opacity-30">
              &nbsp;&nbsp;/&nbsp;&nbsp;
            </span>
            <NewHeaderLink href="/about" title="About" />
            &nbsp;&nbsp;
            <ThemeChanger />
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewHeader };
