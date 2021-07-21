import { ProjectItemHeader, ProjectTag } from "src/components";

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
    <div className="py-6 md:py-10 grid-cols-1 grid md:grid-cols-4 text-left md:col-span-3  lg:last:mb-6">
      {/* <div
        className="max-w-3xl mx-auto grid md:grid-cols-3 grid-cols-3 w-full
                    md:max-w-none md:mx-0"
      > */}
      <ProjectItemHeader title={project.title} link={project.link} />
      {/* </div> */}

      <div className="col-span-1 mt-3 md:mt-4 md:col-span-4 md:col-start-1">
        <article className="prose md:prose-2xl text-gray-600 pb-0 md:mx-0 dark:text-gray-300">
          {project.description}
        </article>
      </div>

      <div
        className="space-x-1 flex space-y-2 flex-wrap col-span-4 md:col-span-4 md:col-start-1
          -ml-1 mt-1 mb-1 md:mb-0 md:pr-0 lg:pr-0 lg:-ml-1"
      >
        {/* <TagDropdown /> */}
        {project.tags.map((title, index) => (
          <ProjectTag key={title} title={`${title}`} index={index} />
        ))}
      </div>
    </div>
  );
};

export { ProjectItem };
