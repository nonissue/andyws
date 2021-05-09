import { ProjectItem } from "./ProjectItem";
import Projects from "src/data/projects.json";

const ProjectList = () => {
  return (
    <div className=" ">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-4">
        <h2 className="text-xl font-bold block md:col-span-3 dark:text-gray-100 text-gray-700 text-left md:mt-0 max-w-md md:max-w-none md:mx-0">
          Projects
        </h2>
        <h2 className="hidden uppercase text-md lg:col-span-1 dark:text-gray-100 font-light font-sans text-gray-400 text-left lg:mt-0">
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
