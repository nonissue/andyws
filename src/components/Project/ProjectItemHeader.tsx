import NextLink from "next/link";
import { slugify } from "src/lib/slugify";

type ProjectItemHeaderProps = {
  title: string;
  link: string;
};

const skews = [
  "skew-x-2",
  // "skew-x-6",
  // "skew-x-3",
  // "skew-x-6",
  "-skew-x-2",
  // "-skew-x-6",
  // "-skew-x-3",
  // "-skew-x-6",
];

const rotates = [
  // "rotate-2",
  "rotate-1",
  // "rotate-3",
  // "rotate-1",
  // "-rotate-2",
  "-rotate-1",
  // "-rotate-3",
  // "-rotate-1",
];

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
    <div className="mb-2 flex justify-left md:block">
      <NextLink href={`/projects/${slugify(title)}`}>
        <a
          href={link}
          className={`${currentRotate} ${currentSkew} md:-ml-0 rounded-lg flex h-full items-center w-max   
            bg-gradient-to-tr from-bluegray-300 via-bluegray-200 to-bluegray-200 border-gray-300
          dark:border-gray-800 dark:border-0 md:drop-shadow-sm dark:shadow-xl p-0.5 md:px-1 md:py-1 
            dark:bg-gradient-to-tl dark:from-gray-800 dark:via-bluegray-900 dark:to-gray-700`}
        >
          <h2
            className={`text-2xl font-display font-black bg-white bg-opacity-75 text-mint-mint7 underline-gray-900 transition-colors duration-300 shadow-md  py-1 px-2  rounded  
                        md:text-5xl lg:text-5xl md:py-3
                      hover:text-orange-500
                      dark:bg-almostblack dark:bg-opacity-90  dark:shadow-xl
                      dark:text-mint-mint9 dark:hover:text-orange-400 dark:underline-gray-700
                        md:px-5 ${calcOffset(currentRotate)} ${calcOffset(
              currentSkew
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
    <div className="mb-0 block md:block col-span-4">
      <NextLink href={`/projects/${slugify(title)}`}>
        <a href={link} className={`h-full items-center w-max`}>
          {/* ${calcOffset(currentRotate)} ${calcOffset(currentSkew)} */}
          <h2
            className={`text-4xl font-sans  tracking-tighter font-extrabold text-gray-800 transition-colors duration-200
                   md:text-5xl lg:text-6xl 
                 hover:text-red-500 dark:hover:text-red-400
                 dark:text-gray-50
                `}
          >
            {title}
          </h2>
        </a>
      </NextLink>
    </div>
  );
};

export { ProjectItemHeader, ProjectItemHeaderButton };
