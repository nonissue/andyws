import { ProjectItemHeader, ProjectTag } from '@/components';
import { Project } from '@/types';

const ProjectItem = (project: Project) => {
  return (
    <div className="grid grid-cols-1 py-6 text-left md:grid-cols-4 md:col-span-3 md:py-10 lg:last:mb-0">
      <ProjectItemHeader title={project.title} link={project.link} />
      <div className="col-span-1 mt-4 md:col-span-4 md:col-start-1 md:mt-5">
        <article className="pb-0 text-slate-600 dark:text-slate-300 prose md:mx-0 md:prose-2xl">
          {project.description}
        </article>
      </div>
      <div className="flex flex-wrap col-span-4 gap-y-2 mt-3 -ml-1 space-x-1 md:col-span-4 md:col-start-1 md:pr-0 md:mt-5 md:mb-0 lg:pr-0 lg:-ml-1">
        {/* <TagDropdown /> */}
        {project.tags.map((title, index) => (
          <ProjectTag key={title} title={`${title}`} index={index} />
        ))}
      </div>
    </div>
  );
};

export { ProjectItem };
