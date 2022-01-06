/* eslint-disable react/display-name */
import { NextPage } from "next/types";
import Link from "next/link";
import { getLayout } from "@/layouts/Layout";
import { LinkWrapper, NewLink } from "src/components/LinkWrapper";

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  console.log(NewLink);
  return (
    <>
      <section
        className="prose prose-lg lg:prose-2xl 
        prose-a:no-underline prose-a:inline-block 
        prose-a:transition-all prose-a:duration-150
        dark:prose-invert
      "
      >
        {/* 
        prose-a:text-sky-700 prose-a:bg-sky-200 
         hover:prose-a:text-sky-100 hover:prose-a:bg-sky-600
        dark:prose-a:bg-sky-900 dark:prose-a:inline-block
        dark:prose-a:text-sky-200 dark:hover:prose-a:text-sky-900 */}
        <p>
          Hi! I&apos;m Andy Williams. I am a Computer Science student{" @ "}
          <LinkWrapper
            href="https://macewan.ca"
            className="bg-yellow-400 hover:bg-white"
          >
            Macewan University
          </LinkWrapper>
          <NewLink href="/projects" passHref={true}>
            NewLINK!!
          </NewLink>
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
        <h5 className="text-gray-400 text-xl leading-relaxed font-sans prose-a:bg-transparent prose-a:bg-opacity-0 dark:prose-a:bg-opacity-0  prose-a:text-sky-800">
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
