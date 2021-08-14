import { NextPage } from "next/types";
import Link from "next/link";
import { getLayout } from "src/layouts/Layout";
import projectData from "data/projects.json";
import { Project } from "src/types";

const Index: NextPage<{ projects: Project[] }> & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = ({ projects }) => {
  console.log(projects);
  return (
    <>
      {/* <div className="mb-8">
        <h3
          className="text-lg  md:text-xl bg-red-100 dark:bg-red-900 overflow-hidden dark:bg-opacity-30 font-normal relative inline bg-opacity-70 px-2 leading-tight py-1 font-display  text-left text-red-500
           dark:text-red-200
            md:mt-0 md:max-w-none md:col-span-3 md:mx-0"
        >
          Hello!
        </h3>
      </div> */}
      <section className="prose prose-lg lg:prose-2xl dark:prose-dark ">
        {/* <h2 className="">Hi!</h2> */}
        <p>
          Hi! I&apos;m Andy Williams. I am a Computer Science student{" @ "}
          {/* <span className="font-sans font-light opacity-75 transform scale-90 inline-block"> */}
          <Link href="https://macewan.ca">
            <a>Macewan University</a>
          </Link>
          &nbsp;in Edmonton, Canada. I spend most of my free time tinkering with{" "}
          <Link href="https://github.com/nonissue/andyws">
            <a>web technologies</a>
          </Link>
          , attempting to understand my own overly-complicated,
          rube-goldberesque{" "}
          <Link href="https://github.com/nonissue/dotfiles">
            <a>dotfiles</a>
          </Link>
          , or taking{" "}
          <Link href="https://instagram.com/nonissue">
            <a>photos</a>
          </Link>
          .
        </p>
        <h5>
          You can learn more about some of{" "}
          <Link href="/projects">
            <a>my current projects</a>
          </Link>
          , view{" "}
          <Link href="/log">
            <a>links</a>
          </Link>{" "}
          I find interesting, peruse{" "}
          <Link href="https://verbosed.vercel.app">
            <a>words</a>
          </Link>{" "}
          that pique my interest, browse some of my favourite{" "}
          <Link href="/photos">
            <a>photos</a>
          </Link>
          , or find out different ways to{" "}
          <Link href="/contact">
            <a>contact me</a>
          </Link>
          .
        </h5>

        {/* <p>
          <a href="/projects" className="text-3xl font-bold">
            Projects
          </a>
        </p> */}
      </section>
    </>
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
