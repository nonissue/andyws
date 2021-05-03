type TagProps = {
  title: string;
};

const Tag = ({ title }: TagProps) => {
  return (
    <span
      className="px-1 py-0 rounded-none shadow-sm text-xs font-mono font-regular text-gray-600
      bg-gradient-to-l from-gray-50 to-gray-50 via-white
      border ring-inset ring-0 ring-offset-2 ring-gray-500 border-opacity-10 border-gray-500 bg-opacity-90
      dark:bg-opacity-90 dark:bg-gray-800 dark:text-gray-300 first:ml-1 first:mt-1"
    >
      {title}
    </span>
  );
};

export { Tag };
