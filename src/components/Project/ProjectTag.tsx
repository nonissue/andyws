type TagProps = {
  title: string;
  index: number;
};

const ProjectTag = ({ title, index }: TagProps) => {
  return (
    <>
      <div
        //   className={`px-1 py-0 rounded-sm shadow-sm text-sm font-mono font-regulartext-gray-600 tag-gradient-hover z-0
        // border border-opacity-0 border-gray-500 block

        // dark:ring-gray-300 dark:ring-opacity-0 dark:border-gray-700 dark:ring-offset-0
        // dark:bg-opacity-0 dark:bg-gray-700 dark:border-opacity-0 dark:text-gray-300
        // first:ml-1 first:mt-1`}
        className={`px-1 py-0 rounded-sm shadow-sm text-xs md:text-base font-mono text-gray-600 z-0
      border border-opacity-20 border-gray-500 uppercase tracking-wider
      dark:text-gray-400 dark:border-gray-800
      first:ml-1 first:mt-2`}
      >
        {title}
      </div>
      {index % 1 === 1 ? (
        <div className="hidden w-0 h-0 lg:block lg:w-full" />
      ) : (
        ""
      )}
    </>
  );
};

export { ProjectTag };
