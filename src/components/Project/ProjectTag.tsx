type TagProps = {
  title: string;
  index: number;
};

const ProjectTag = ({ title, index }: TagProps) => {
  return (
    <>
      <div
        className={`z-0 rounded-sm border border-gray-500 border-opacity-20 px-1 py-0 font-mono text-xs uppercase tracking-wider text-gray-600 shadow-sm first:ml-1 first:mt-2 dark:border-gray-800 dark:text-gray-400 md:text-base`}
      >
        {title}
      </div>
      {index % 1 === 1 ? (
        <div className="hidden h-0 w-0 lg:block lg:w-full" />
      ) : (
        ""
      )}
    </>
  );
};

export { ProjectTag };
