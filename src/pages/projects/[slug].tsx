import NextLink from "next/link";
import { GetStaticProps } from "next";
import Image from "next/image";
import { slugify } from "src/lib/slugify";
import { Project } from "@/types";
import projectData from "data/projects.json";

const ZERO = 0; // why do i do this

const ImageLoader = ({ src }: { src: string }) => {
  return `https://dev.andy.ws/_next/image?url=${src}&w=3840&q=75`;
};

const ProjectPage = ({ project }: { project: Project }) => {
  if (!project) {
    return (
      <section className="padded-container bg-white font-sans dark:bg-almostblack">
        Loading...
      </section>
    );
  }

  return (
    <section className="padded-container bg-white font-sans dark:bg-almostblack">
      <div className="py-1 text-left text-xs uppercase opacity-50">
        <NextLink href="/">
          <a>&larr; Back to Projects</a>
        </NextLink>
      </div>
      <h2 className="font-display text-4xl font-bold uppercase sm:text-6xl md:text-5xl lg:text-6xl">
        {project.title}
      </h2>
      <br />
      <div className="grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-3">
        <article className="relative h-48 sm:h-80 lg:col-span-2 lg:h-72">
          <Image
            loader={ImageLoader}
            src="/rose-thorn_25p.png"
            layout="fill"
            alt="Random image from unsplash.com"
          />
        </article>

        <article className="underline-gray-600 prose-sm col-span-1 font-sans font-light italic text-gray-700 dark:text-gray-300 lg:col-span-1">
          Posuere morbi leo urna molestie at elementum eu. Urna duis convallis
          convallis tellus. Urna molestie at elementum eu. Nunc sed blandit
          libero volutpat.
        </article>

        <article className="prose col-span-1 text-gray-700 dark:text-gray-300 lg:prose-xl lg:col-span-2 lg:col-start-2">
          {project.description}
        </article>

        <article className="prose col-span-1 text-gray-700 dark:text-gray-300 lg:prose-xl lg:col-span-2 lg:col-start-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
          egestas pretium aenean pharetra. Orci eu lobortis elementum nibh
          tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra
          vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit
          tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna
          duis convallis convallis tellus. Urna molestie at elementum eu. Nunc
          sed blandit libero volutpat.
        </article>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projectData.filter((p) => slugify(p.title) === params?.slug);

  return {
    props: {
      project: project[ZERO], // destructure instead of being an idiot plz
    },
  };
};

export async function getStaticPaths() {
  const paths = projectData.map((p) => ({
    params: { slug: slugify(p.title) },
  }));

  return {
    fallback: false, // See the "fallback" section below
    paths,
  };
}

export default ProjectPage;
