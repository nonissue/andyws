import NextLink from "next/link";
import { slugify } from "src/lib/slugify";
import { getLayout } from "src/layouts/Layout";
import ProjectsData from "data/projects.json";

const Projects: React.FunctionComponent & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section className=" bg-white dark:bg-almostblack font-sans">
      <h2 className="font-display font-bold uppercase text-4xl sm:text-6xl md:text-5xl lg:text-6xl">
        Projects
      </h2>
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-6 min-h-full">
        <ul>
          {ProjectsData.map((project) => (
            <li key={project.title}>
              —{" "}
              <NextLink href={`/projects/${slugify(project.title)}`}>
                <a className="underline-gray-300 text-xl dark:underline-gray-600 hover:underline-orange-400 dark:hover:no-underline transition-all duration-1000">
                  {project.title}
                </a>
              </NextLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Projects.getLayout = getLayout;

export default Projects;
