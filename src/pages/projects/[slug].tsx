import NextLink from "next/link";
import { GetStaticProps } from "next";
import Image from "next/image";
import { slugify } from "src/lib/slugify";
import { Project } from "src/types";
import projectData from "data/projects.json";
// import projectPic from "../../../public/rose-thorn_25p.png";

const ImageLoader = ({ src }: { src: string }) => {
  return `https://dev.andy.ws/_next/image?url=${src}&w=3840&q=75`;
};

const ProjectPage = ({ project }: { project: Project }) => {
  return (
    <section className="padded-container bg-white dark:bg-almostblack font-sans">
      <div className="text-left opacity-50 text-xs uppercase py-1">
        <NextLink href="/">
          <a>&larr; Back to Projects</a>
        </NextLink>
      </div>
      <h2 className="font-display font-bold uppercase text-4xl sm:text-6xl md:text-5xl lg:text-6xl">
        {project.title}
      </h2>
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-6">
        <article className="lg:col-span-2 relative h-48 sm:h-80 lg:h-72">
          <Image
            loader={ImageLoader}
            src="/rose-thorn_25p.png"
            layout="fill"
            alt="Random image from unsplash.com"
          />
        </article>

        <article className="lg:col-span-1 col-span-1 font-sans italic prose-sm text-gray-700 dark:text-gray-300 font-light underline-gray-600">
          Posuere morbi leo urna molestie at elementum eu. Urna duis convallis
          convallis tellus. Urna molestie at elementum eu. Nunc sed blandit
          libero volutpat.
        </article>

        <article className="lg:col-span-2 lg:col-start-2 col-span-1 prose lg:prose-xl text-gray-700 dark:text-gray-300">
          {project.description}
        </article>

        <article className="lg:col-span-2 lg:col-start-2 col-span-1 prose lg:prose-xl text-gray-700 dark:text-gray-300">
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
      project: project[0],
    },
  };
};

export async function getStaticPaths() {
  const paths = projectData.map((p) => ({
    params: { slug: slugify(p.title) },
  }));

  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}

export default ProjectPage;
