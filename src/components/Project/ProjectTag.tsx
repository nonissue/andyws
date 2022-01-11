type TagProps = {
  title: string;
  index: number;
};

const ProjectTag = ({ title, index }: TagProps) => {
  return (
    <>
      <div
        className={`px-2 py-0 rounded-sm shadow-sm text-xs md:text-base font-mono font-base text-slate-600 z-0 border border-opacity-20 border-slate-500 uppercase tracking-wide dark:text-slate-500 dark:border-slate-700 first:ml-1`}
      >
        {title}
      </div>
      {index % 1 === 1 ? (
        <div className="hidden w-0 h-0 lg:block lg:w-full" />
      ) : (
        ''
      )}
    </>
  );
};

export { ProjectTag };
