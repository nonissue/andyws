import { ThemeChanger } from "../ThemeChanger";

const Header = () => {
  return (
    <div className="z-10 relative ">
      {/* <div className="relative z-20 inset-0"> */}
        {/* <div className="max-w-3xl mx-auto flex px-6 border py-2 sm:px-6 lg:px-8 lg:py-2 inset-0 "> */}
          {/*☄︎ ☺︎☢︎☸︎⚇⚇⍺⍵☺︎  */}
          <div className=" ">
            {/* <Link href="/">
              <a className=" flex items-center font-display uppercase">
                <div className="font-light tracking-tight text-xl sm:text-xl md:text-6xl text-black">
                  amdy.ws
                </div>
                <div className="hidden tracking-tight text-opacity-80 first-letter:text-opacity-100 text-gray-900 font-display  dark:text-black text-xs sm:text-base">
                  .ws
                </div>
              </a>
            </Link> */}
            <ThemeChanger />
          </div>
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export { Header };
