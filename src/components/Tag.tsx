type TagProps = {
  title: string;
};

const Tag = ({ title }: TagProps) => {
  return (
    <span
      className="px-1 py-0 rounded-sm shadow-sm text-xs font-display font-regular text-gray-600
      bg-gradient-to-l from-gray-50 to-gray-50 via-white
      border ring-inset ring-0 ring-offset-2 ring-gray-500 border-opacity-10 border-gray-500 bg-opacity-90
      dark:ring-gray-300 dark:border-gray-700 dark:ring-offset-0
      dark:bg-opacity-100 dark:bg-gray-800 dark:text-gray-300 dark:bg-gradient-to-l dark:from-gray-900 dark:to-gray-900 dark:via-black
      first:ml-1 first:mt-1"
    >
      {title}
    </span>
  );
};

export { Tag };
