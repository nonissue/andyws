import { ProjectList } from "src/components";
import { NextPage } from "next/types";
import { getLayout } from "src/layouts/Layout";
import projectData from "data/projects.json";
import { Project } from "@/types";

const Index: NextPage<{ projects: Project[] }> & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = ({ projects }) => {
  return (
    <section>
      <ProjectList projects={projects} />
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
