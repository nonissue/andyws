import { ProjectList } from "src/components";
import { NextPage } from "next/types";

// import Projects from "src/data/projects.json";
import { getLayout } from "src/layouts/Layout";

const Index: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <div className="">
      <ProjectList />
    </div>
  );
};

Index.getLayout = getLayout;

export default Index;
