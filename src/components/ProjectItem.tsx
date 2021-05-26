import { Tag } from "./Tag";

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
    <div
      className="px-0 py-4 grid-cols-1 grid border-dotted border-t lg:border-t border-gray-200 dark:border-gray-800 my-2 
          md:grid-cols-3 lg:grid-cols-3 last:border-b last:pb-6 lg:last:border-b lg:last:mb-12"
    >
      <div
        className="max-w-4xl text-left mx-auto block w-full test:text-center 
                    md:max-w-none md:mx-0
                    lg:col-span-1"
      >
        <a href={project.link}>
          <h2
            className="text-3xl mt-0.5 mb-2 font-mono font-semibold tracking-wider text-gray-700 underline-gray-300 
              md:text-3xl md:mt-1 md:mb-1 dark:underline-gray-800
              lg:text-3xl
            hover:text-orange-500 transition-colors duration-300
            dark:text-gray-300 dark:hover:text-purple-400"
          >
            {project.title}
          </h2>
        </a>
        <div
          className="space-x-1 space-y-1 flex-wrap w-full text-center flex -ml-1 mt-0 mb-0
            md:mb-2 md:justify-start md:pr-7
            lg:justify-start lg:pr-0 lg:-ml-1"
        >
          {project.tags.map((title) => (
            <Tag key={title} title={`#${title}`} />
          ))}
        </div>
      </div>

      <div className="col-span-2 grid mt-3 md:mt-0 lg:col-span-2">
        <article className="prose lg:prose-lg text-gray-600 pb-0 md:mx-0 dark:text-gray-300">
          {project.description}
        </article>
      </div>
    </div>
  );
};

export { ProjectItem };
