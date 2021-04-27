import { ProjectList } from "src/components";
import { NextPage } from "next/types";
// import Projects from "src/data/projects.json";
import { getLayout } from "src/layouts/Layout";

const Index: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <div className="">
      <section className="padded-container bg-white dark:bg-gray-900 font-display lg:border-l lg:border-r dark:border-gray-800">
        <ProjectList />
      </section>

      {/* <div className="padded-container text-right bg-white dark:bg-gray-900 h-24 border-b-2 dark:border-gray-700 font-mono uppercase font-sm text-gray-400">
        2021 © nonissue inc
      </div> */}
    </div>
  );
};

Index.getLayout = getLayout;

export default Index;
