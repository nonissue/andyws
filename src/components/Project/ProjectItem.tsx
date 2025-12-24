import { ProjectItemHeader, ProjectTag } from "@/components";
import { Project } from "@/types";

const ProjectItem = (project: Project) => {
  return (
    <div className="grid grid-cols-1 py-6 text-left md:col-span-3 md:grid-cols-4 md:py-10 lg:last:mb-0">
      <ProjectItemHeader title={project.title} link={project.link} />

      <div className="col-span-1 mt-3 md:col-span-4 md:col-start-1 md:mt-4">
        <article className="prose pb-0 text-gray-600 dark:text-gray-300 md:prose-2xl md:mx-0">
          {project.description}
        </article>
      </div>

      <div className="col-span-4 -ml-1 mt-1 mb-1 flex flex-wrap space-x-1 space-y-2 md:col-span-4 md:col-start-1 md:mb-0 md:pr-0 lg:-ml-1 lg:pr-0">
        {/* <TagDropdown /> */}
        {project.tags.map((title, index) => (
          <ProjectTag key={title} title={`${title}`} index={index} />
        ))}
      </div>
    </div>
  );
};

export { ProjectItem };
