import { ProjectCard, Timeline, Header } from "src/components";
import Projects from "src/data/projects.json";

const Index: React.FunctionComponent = () => {
  return (
    <>
      <section className="dark:text-gray-400 text-gray-700 shadow-xl mb-0 px-0 bg-white dark:bg-gray-900 font-display max-w-6xl mx-auto">
        <Header />

        <h2 className="text-xl text-gray-800 dark:text-white text-left font-semibold px-6 lg:px-10 mx-auto mt-8 mb-2 container">
          Projects
        </h2>

        <div className="flex flex-wrap px-4 lg:px-8 container mx-auto">
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
    </>
  );
};

export default Index;
