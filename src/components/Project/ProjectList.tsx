import { ProjectItem } from "./ProjectItem";
import { Project } from "@/types";
// import Projects from "data/projects.json";

const ProjectList = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="mx-auto bg-white dark:bg-almostblack">
      <div className="mb-4 grid-cols-1 items-center md:grid-cols-1">
        <h3 className="relative inline overflow-hidden bg-blue-100 bg-opacity-70 px-2 py-1 text-left font-display text-lg font-normal leading-tight text-blue-500 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-200 md:col-span-3 md:mx-0 md:mt-0 md:max-w-none md:text-xl">
          Projects*
        </h3>
      </div>

      <div className="grid grid-cols-1 divide-y divide-gray-200 border-b dark:divide-gray-800 dark:border-gray-800 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
      <div className="my-4">
        <h3 className="relative inline overflow-hidden bg-opacity-70 py-1 text-left font-mono text-sm leading-tight text-gray-500 opacity-75 dark:bg-opacity-30 dark:text-gray-200 md:col-span-3 md:mx-0 md:mt-0 md:max-w-none md:text-sm">
          * – Work in Progress
        </h3>
      </div>
    </div>
  );
};

export { ProjectList };
