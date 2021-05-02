type TagProps = {
  title: string;
};

const Tag = ({ title }: TagProps) => {
  return (
    <span
      className="px-2 py-0.5 text-sm font-sans font-bold bg-gray-200 text-gray-500 bg-opacity-90
      dark:bg-opacity-90 dark:bg-gray-800 dark:text-gray-300 first:ml-0.5 first:mt-0.5"
    >
      {title}
    </span>
  );
};

export { Tag };
