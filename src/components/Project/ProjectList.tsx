import { ProjectItem } from './ProjectItem';
import { Project } from '@/types';
// import Projects from "data/projects.json";

const ProjectList = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="mx-auto">
      <div className="grid-cols-1 items-center mb-4 md:grid-cols-1">
        <h3 className="inline overflow-hidden relative py-1 px-2 font-display text-lg font-normal leading-tight text-left text-blue-500 dark:text-blue-200 bg-blue-100/70 dark:bg-blue-900/30 md:col-span-3 md:mx-0 md:mt-0 md:max-w-none md:text-xl">
          Projects*
        </h3>
      </div>

      <div className="grid grid-cols-1 border-b dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
      <div className=" my-4">
        <h3 className="inline overflow-hidden relative py-1 font-mono text-sm leading-tight text-left text-slate-500 dark:text-slate-200 opacity-75 md:col-span-3 md:mx-0 md:mt-0 md:max-w-none md:text-sm">
          * – Work in Progress
        </h3>
      </div>
    </div>
  );
};

export { ProjectList };
