import { ProjectCard, Timeline } from "src/components";
import { NextPage } from "next/types";
import Projects from "src/data/projects.json";
import { getLayout } from "src/layouts/Layout";
import { useSiteContext } from "src/lib/context";

const Index: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  const { state } = useSiteContext();
  return (
    <section className="dark:text-gray-400 text-gray-700 shadow-xl mb-0 px-0 bg-white dark:bg-gray-900 font-display max-w-6xl mx-auto">
      {state.isLoading ? (
        <>
          <div className="absolute inset-0 w-screen h-screen bg-gray-900 bg-opacity-30 backdrop-filter backdrop-blur-lg z-40"></div>
          <h3 className="text-white text-4xl absolute -ml-24 text-center w-48 font-mono uppercase tracking-widest z-50 top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2">
            {state.isLoading ? "Loading" : ""}
          </h3>
        </>
      ) : (
        ""
      )}
      <h2 className="text-xl text-gray-800 dark:text-white text-left font-semibold px-6 lg:px-10 mx-auto mt-8 mb-2 container">
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
