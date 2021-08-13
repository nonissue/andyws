import { NextPage } from "next/types";
import { getLayout } from "src/layouts/Layout";
import projectData from "data/projects.json";
import { Project } from "src/types";

const Index: NextPage<{ projects: Project[] }> & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = ({ projects }) => {
  console.log(projects);
  return (
    <section
      className="prose lg:prose-2xl text-gray-600
        dark:text-gray-300"
    >
      <h2
        className="font-display text-gray-600
        dark:text-gray-200
        hover:text-red-500 dark:hover:text-red-400"
      >
        Andy.ws
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Turpis egestas
        pretium aenean pharetra. Orci eu lobortis elementum nibh tellus
        molestie. Vulputate dignissim suspendisse in est. Vel pharetra vel
        turpis nunc.
      </p>
      <p className="text-sm lg:text-lg">
        Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus mauris.
        Posuere morbi leo urna molestie at elementum eu. Urna duis convallis
        convallis tellus. Urna molestie at elementum eu. Nunc sed blandit libero
        volutpat.
      </p>

      <p className="border-b"> </p>
    </section>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      projects: projectData,
    },
  };
};

Index.getLayout = getLayout;

export default Index;
