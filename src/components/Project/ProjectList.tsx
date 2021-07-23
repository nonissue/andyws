import { ProjectItem } from "./ProjectItem";
import Projects from "data/projects.json";

const ProjectList = () => {
  return (
    <div className="bg-white dark:bg-almostblack mx-auto">
      <div className="grid-cols-1 md:grid-cols-1 items-center mb-4">
        <h3
          className="text-lg md:text-xl bg-red-100 dark:bg-red-900 overflow-hidden dark:bg-opacity-30 font-normal relative inline bg-opacity-70 px-2 leading-tight py-1 font-display  text-left text-red-500
           dark:text-red-200
            md:mt-0 md:max-w-none md:col-span-3 md:mx-0"
        >
          Development
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y divide-gray-200 dark:divide-gray-800 border-b dark:border-gray-800 ">
        {Projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export { ProjectList };
