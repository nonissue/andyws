import { ProjectList } from "src/components";
import { NextPage } from "next/types";
import { getLayout } from "src/layouts/Layout";

const Index: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section className="">
      <ProjectList />
    </section>
  );
};

Index.getLayout = getLayout;

export default Index;
