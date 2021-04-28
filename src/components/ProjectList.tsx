import { ProjectItem } from "./ProjectItem";
import Projects from "src/data/projects.json";

const ProjectList = () => {
  return (
    <div className="md:border dark:border-gray-800 p-0 pb-2 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-6">
        <h2 className="text-2xl block md:col-span-1 dark:text-gray-100 font-bold font-display text-gray-700 text-left md:mt-0">
          Projects
        </h2>
        <h2 className="hidden md:block text-lg lg:col-span-1 dark:text-gray-100 font-medium font-display text-gray-700 text-left lg:mt-0">
          Description
        </h2>
      </div>
      {Projects.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </div>
  );
};

export { ProjectList };
