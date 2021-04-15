import { ProjectItem } from "./ProjectItem";
import Projects from "src/data/projects.json";

const ProjectList = () => {
  return (
    <div>
      <h2 className="text-2xl dark:text-gray-100 font-bold font-display text-gray-700 text-left mb-8">
        Projects
      </h2>
      {Projects.map((project) => (
        <ProjectItem key={project.title} {...project} />
      ))}
    </div>
  );
};

export { ProjectList };
