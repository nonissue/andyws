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
    <div className="px-0 py-4 grid grid-cols-1 md:grid-cols-3 md:border-t border-gray-200 dark:border-gray-800 my-2 last:border-b last:pb-6">
      <div className="max-w-md mx-auto md:max-w-none md:mx-0 block w-full">
        <a href={project.link}>
          <h2 className=" md:text-left text-3xl  md:text-2xl mt-0 md:mt-1 mb-2 md:mb-0 font-sans font-bold text-gray-800  hover:text-orange-500 dark:text-gray-300 dark:hover:text-purple-300 transition-colors duration-300">
            {project.title}
          </h2>
        </a>
        <div className="space-x-1 space-y-1 flex-wrap  md:justify-start flex -ml-1 mt-0 md:pr-7 mb-0 md:mb-2">
          {project.tags.map((title) => (
            <Tag key={title} title={`#${title}`} />
          ))}
        </div>
      </div>
      <div className="col-span-2 grid mt-3 md:mt-0">
        <article className="text-sm md:text-sm leading-6 md:leading-6 text-gray-600 pb-0 max-w-md mx-auto md:max-w-none md:mx-0 dark:text-gray-300">
          {project.description}
        </article>
      </div>
    </div>
  );
};

export { ProjectItem };
