import NextLink from "next/link";
import { slugify } from "@/lib/slugify";

type ProjectItemHeaderProps = {
  title: string;
  link: string;
};

const skews = ["skew-x-2", "-skew-x-2"];

const rotates = ["rotate-1", "-rotate-1"];

const ProjectItemHeaderButton = ({ title, link }: ProjectItemHeaderProps) => {
  const randomSkew = () => {
    return skews[Math.floor(Math.random() * 2 + 0)];
  };

  const randomRotate = () => {
    return rotates[Math.floor(Math.random() * 2 + 0)];
  };

  const currentSkew = randomSkew();
  const currentRotate = randomRotate();

  const calcOffset = (currentTransform: string) => {
    if (currentTransform[0] == "-") {
      return currentTransform.substring(1);
    } else {
      return "-" + currentTransform;
    }
  };

  return (
    <div className="justify-left mb-2 flex md:block">
      <NextLink href={`/projects/${slugify(title)}`}>
        <a
          href={link}
          className={`${currentRotate} ${currentSkew} flex h-full w-max items-center rounded-lg border-gray-300 bg-gradient-to-tr from-bluegray-300 via-bluegray-200 to-bluegray-200 p-0.5 dark:border-0 dark:border-gray-800 dark:bg-gradient-to-tl dark:from-gray-800 dark:via-bluegray-900 dark:to-gray-700 dark:shadow-xl md:-ml-0 md:px-1 md:py-1 md:drop-shadow-sm`}
        >
          <h2
            className={`text-mint-mint7 underline-gray-900 dark:text-mint-mint9 dark:underline-gray-700 rounded bg-white bg-opacity-75 py-1 px-2 font-display text-2xl font-black shadow-md transition-colors duration-300 hover:text-orange-500 dark:bg-almostblack dark:bg-opacity-90 dark:shadow-xl dark:hover:text-orange-400 md:py-3 md:px-5 md:text-5xl lg:text-5xl ${calcOffset(currentRotate)} ${calcOffset(
              currentSkew,
            )}`}
          >
            {title}
          </h2>
        </a>
      </NextLink>
    </div>
  );
};

const ProjectItemHeader = ({ title, link }: ProjectItemHeaderProps) => {
  return (
    <div className="col-span-4 mb-0 block md:block">
      <NextLink href={`/projects/${slugify(title)}`}>
        <a href={link} className={`h-full w-max items-center`}>
          {/* ${calcOffset(currentRotate)} ${calcOffset(currentSkew)} */}
          <h2
            className={`font-sans text-4xl font-extrabold tracking-tighter text-gray-800 transition-colors duration-200 hover:text-blue-500 dark:text-gray-50 dark:hover:text-blue-400 md:text-5xl lg:text-6xl`}
          >
            {title}
          </h2>
        </a>
      </NextLink>
    </div>
  );
};

export { ProjectItemHeader, ProjectItemHeaderButton };
