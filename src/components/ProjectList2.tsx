import { ProjectItem } from "./ProjectItem2";
import Projects from "data/projects.json";

const ProjectList = () => {
  return (
    <div className="bg-white dark:bg-almostblack">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-4">
        <h2
          className=" max-w-md mx-auto text-xl font-bold w-full text-gray-700 text-left 
           dark:text-gray-100
            md:mt-0 md:max-w-none md:col-span-3 md:mx-0"
        >
          Projects
        </h2>
      </div>
      {Projects.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </div>
  );
};

export { ProjectList };
