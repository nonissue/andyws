import { ProjectCard, Timeline, Header } from "src/components";
import Projects from "src/data/projects.json";

const Index: React.FunctionComponent = () => {
  return (
    <>
      <section className="dark:text-gray-400 text-gray-700 shadow-xl mb-8 px-2 bg-white dark:bg-gray-900 body-font max-w-6xl mx-auto">
        <Header />

        <h2 className="text-xl text-gray-800 dark:text-white text-left font-semibold px-4 pl-0 mx-4 mt-8 mb-2">
          Projects
        </h2>

        <div className="flex flex-wrap -mx-4 px-4">
          {Projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="-mx-2 py-6 bg-gray-900">
          <h2 className="tracking-widest text-3xl title-font opacity-100 text-white text-center lg:px-0 font-medium uppercase px-4 mx-4 my-8">
            Activity
          </h2>

          <Timeline />
        </div>
      </section>
    </>
  );
};

export default Index;
