type TagProps = {
  title: string;
  index: number;
};

const Tag = ({ title, index }: TagProps) => {
  return (
    <>
      <div
        className={`px-1 py-0 rounded-sm shadow-sm text-sm font-mono font-regular text-gray-600 tag-gradient-hover z-0
      border border-opacity-10 border-gray-500 block
      dark:hover:bg-gray-300 dark:hover:text-gray-50 dark:hover:bg-gradient-to-br dark:hover:from-gray-700 dark:hover:via-gray-600 dark:hover:to-gray-700 dark:hover:cursor-pointer
      dark:ring-gray-300 dark:border-gray-700 dark:ring-offset-0
      dark:bg-opacity-100 dark:bg-gray-700 dark:text-gray-300 
      first:ml-1 first:mt-1`}
      >
        {title}
      </div>
      {index % 4 === 1 ? (
        <div className="hidden w-0 h-0 lg:block lg:w-full" />
      ) : (
        ""
      )}
    </>
  );
};

export { Tag };
