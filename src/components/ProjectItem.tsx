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
    <div className="px-0 py-4 grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 dark:border-gray-800 my-2 last:border-b-0 last:pb-0">
      <div>
        <a href={project.link}>
          <h2 className="text-2xl md:text-2xl mt-0 md:mt-0 inline-block mb-2 md:mb-0 font-semibold font-mono tracking-wide  text-blue-600 hover:text-orange-500 dark:text-blue-300 dark:hover:text-orange-300">
            {project.title}
          </h2>
        </a>
        <div className="flex flex-row flex-wrap leading-6 text-md md:text-sm md:pr-16 font-medium font-sans pr-5 mb-2 md:mb-0">
          {project.tags.map((tag) => (
            <div key={tag} className="pr-1 text-gray-400 dark:text-gray-700">
              #
              <div className="inline text-gray-400 dark:text-gray-500">
                {tag}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-2 grid">
        <article className="text-lg leading-8 font-display pb-0">
          {project.description}
        </article>
      </div>
    </div>
  );
};

export { ProjectItem };
