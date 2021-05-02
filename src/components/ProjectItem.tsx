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
    <div className="px-0 py-4 grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 dark:border-gray-800 my-2 last:border-b-0 last:pb-0">
      <div>
        <a href={project.link}>
          <h2 className="text-3xl md:text-2xl mt-0 md:mt-0 inline-block mb-2 md:mb-1 font-black font-mono tracking-wide hover:text-orange-500 dark:text-blue-300 dark:hover:text-orange-300">
            {project.title}
          </h2>
        </a>
        {/* <div className="flex flex-wrap gap-x-0.5 gap-y-0.5 pr-10"> */}
        <div className="space-x-0.5 space-y-0.5 flex-wrap flex -ml-0.5 mt-0 pr-7 mb-2">
          {project.tags.map((title) => (
            <Tag key={title} title={`#${title}`} />
          ))}
        </div>
      </div>
      <div className="col-span-2 grid mt-3">
        <article className="text-lg leading-8 font-display pb-0">
          {project.description}
        </article>
      </div>
    </div>
  );
};

export { ProjectItem };
