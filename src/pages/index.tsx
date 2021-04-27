import { ProjectList } from "src/components";
import { NextPage } from "next/types";
// import Projects from "src/data/projects.json";
import { getLayout } from "src/layouts/Layout";

const Index: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <div className="">
      <section className="padded-container bg-white dark:bg-gray-900 font-display md:border-l md:border-r dark:border-gray-800">
        <ProjectList />
      </section>
    </div>
  );
};

Index.getLayout = getLayout;

export default Index;
