import NextLink from 'next/link';
import { slugify } from '@/lib/slugify';

type ProjectItemHeaderProps = {
  title: string;
  link: string;
};

const skews = ['skew-x-2', '-skew-x-2'];

const rotates = ['rotate-1', '-rotate-1'];

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
    if (currentTransform[0] == '-') {
      return currentTransform.substring(1);
    } else {
      return '-' + currentTransform;
    }
  };

  return (
    <div className="flex justify-end mb-2 md:block">
      <NextLink href={`/projects/${slugify(title)}`}>
        <a
          href={link}
          // className={`${currentRotate} ${currentSkew} md:-ml-0 rounded-2xl flex h-full items-center w-max
          //   bg-gradient-to-tr from-slate-300 via-slate-200 to-slate-500 border-slate-300
          // dark:border-slate-800 dark:border-0 md:drop-shadow-sm dark:shadow-xl p-0.5 md:px-1 md:py-1
          //   dark:bg-gradient-to-tl dark:from-slate-800 dark:via-slate-900 dark:to-slate-700`}
          className="flex items-center p-0.5 w-max h-full bg-gradient-to-tr dark:bg-gradient-to-tl from-slate-300 dark:from-slate-800 via-slate-200 dark:via-slate-900 to-slate-500 dark:to-slate-700 rounded-2xl dark:border-0 border-slate-300 dark:border-slate-800 dark:shadow-xl md:p-1 md:-ml-0 md:drop-shadow-sm"
        >
          <h2
            className={`text-2xl bg-white font-display font-black text-mint-mint7 underline-slate-900 transition-colors duration-300 shadow-md py-1 px-2 rounded-xl md:text-5xl lg:text-5xl md:py-3 hover:text-blue-400 dark:bg-blue-400/90 dark:shadow-xl dark:text-teal-300 dark:hover:text-orange-400 md:px-5 ${calcOffset(
              currentRotate
            )} ${calcOffset(currentSkew)} `}
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
    <div className="block col-span-4 mb-0 md:block">
      <NextLink href={`/projects/${slugify(title)}`}>
        <a href={link} className={`h-full items-center w-max`}>
          {/* ${calcOffset(currentRotate)} ${calcOffset(currentSkew)} */}
          <h2
            // className={`text-4xl font-sans tracking-tighter font-extrabold text-slate-800 transition-colors duration-200 md:text-5xl lg:text-6xl hover:text-blue-500 dark:hover:text-blue-400 dark:text-slate-50`}
            className="font-sans text-4xl font-extrabold tracking-tighter text-slate-800 hover:text-blue-500 dark:text-slate-50 dark:hover:text-blue-400 transition-colors duration-200 md:text-5xl lg:text-6xl"
          >
            {title}
          </h2>
        </a>
      </NextLink>
    </div>
  );
};

export { ProjectItemHeader, ProjectItemHeaderButton };
