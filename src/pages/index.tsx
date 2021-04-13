import { ProjectCard, Timeline } from "src/components";
import { NextPage } from "next/types";
import Projects from "src/data/projects.json";
import { getLayout } from "src/layouts/Layout";

const Index: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section className="dark:text-gray-400 text-gray-700 shadow-xl mb-0 px-0 bg-white dark:bg-gray-900 font-display">
      <h2 className="text-3xl  dark:text-white font-normal font-mono  text-gray-700 text-left  px-6 py-3 lg:px-10 mx-auto container">
        Projects
      </h2>

      <div className="flex flex-wrap px-2 lg:px-8 container mx-auto">
        {Projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <div className="py-6 bg-gray-900 container px-6 lg:px-10 mx-auto">
        <h2 className="tracking-widest text-xl opacity-100 text-gray-50 text-left font-normal uppercase px-4 my-8 font-mono">
          Recent Activity
        </h2>

        <Timeline />
      </div>
    </section>
  );
};

Index.getLayout = getLayout;

export default Index;
