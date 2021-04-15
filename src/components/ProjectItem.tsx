type Project = {
  title: string;
  tags: string[];
  description: string;
  type: string;
  link: string;
  imgsrc: string;
};

const ProjectItem = (project: Project) => {
  return (
    <div className="px-0 py-3 grid grid-cols-1 lg:grid-cols-3 border-t border-gray-200 dark:border-gray-800 my-2 last:border-b">
      <div>
        <a href={project.link}>
          <h2 className="text-xl inline-block mb-2 lg:mb-0 font-semibold font-mono uppercase text-indigo-500 hover:text-indigo-900 dark:text-indigo-300 tracking-widest dark:hover:text-indigo-100">
            {project.title}
          </h2>
        </a>
        <div className="flex flex-row flex-wrap text-sm font-mono">
          {project.tags.map((tag) => (
            <div key={tag} className="pr-1 text-gray-400 dark:text-gray-600">
              #{tag}
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-2 grid">
        <article className="text-md leading-6 font-display py-1">
          {project.description}
        </article>
      </div>
    </div>
  );
};

export { ProjectItem };
