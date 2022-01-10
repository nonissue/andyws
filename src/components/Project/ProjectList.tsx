import { ProjectItem } from './ProjectItem';
import { Project } from '@/types';
// import Projects from "data/projects.json";

const ProjectList = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="mx-auto bg-white dark:bg-almostblack">
      <div className="grid-cols-1 items-center mb-4 md:grid-cols-1">
        <h3 className="inline overflow-hidden relative py-1 px-2 font-display text-lg font-normal leading-tight text-left text-blue-500 dark:text-blue-200 bg-blue-100/70 dark:bg-blue-900/30 md:col-span-3 md:mx-0 md:mt-0 md:max-w-none md:text-xl">
          Projects*
        </h3>
      </div>

      <div className="grid grid-cols-1 border-b dark:border-gray-800 divide-y divide-gray-200 dark:divide-gray-800 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
      <div className=" my-4">
        <h3 className="inline overflow-hidden relative py-1 font-mono text-sm leading-tight text-left text-gray-500 dark:text-gray-200 opacity-75 md:col-span-3 md:mx-0 md:mt-0 md:max-w-none md:text-sm">
          * – Work in Progress
        </h3>
      </div>
    </div>
  );
};

export { ProjectList };
