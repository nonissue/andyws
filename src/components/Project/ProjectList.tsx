import { ProjectItem } from "./ProjectItem";
import { Project } from "@/types";
// import Projects from "data/projects.json";

const ProjectList = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="bg-white dark:bg-almostblack mx-auto">
      <div className="grid-cols-1 md:grid-cols-1 items-center mb-4">
        <h3
          className="text-lg md:text-xl bg-blue-100 dark:bg-blue-900 overflow-hidden dark:bg-opacity-30 font-normal relative inline bg-opacity-70 px-2 leading-tight py-1 font-display  text-left text-blue-500
           dark:text-blue-200
            md:mt-0 md:max-w-none md:col-span-3 md:mx-0"
        >
          Projects*
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y divide-gray-200 dark:divide-gray-800 border-b dark:border-gray-800 ">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
      <div className=" my-4">
        <h3
          className="text-sm md:text-sm opacity-75 overflow-hidden dark:bg-opacity-30 relative inline bg-opacity-70 leading-tight py-1 font-mono  text-left text-gray-500
           dark:text-gray-200
            md:mt-0 md:max-w-none md:col-span-3 md:mx-0"
        >
          * – Work in Progress
        </h3>
      </div>
    </div>
  );
};

export { ProjectList };
