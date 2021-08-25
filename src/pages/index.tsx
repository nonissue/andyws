import { NextPage } from "next/types";
import Link from "next/link";
import { getLayout } from "@/layouts/Layout";

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <>
      <section className="prose prose-lg lg:prose-2xl dark:prose-dark ">
        <p>
          Hi! I&apos;m Andy Williams. I am a Computer Science student{" @ "}
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
      </section>
    </>
  );
};

IndexPage.getLayout = getLayout;

export default IndexPage;
