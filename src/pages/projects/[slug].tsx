import NextLink from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <section className="padded-container bg-white dark:bg-almostblack font-sans">
      <div className="text-left opacity-50 text-xs uppercase py-1">
        <NextLink href="/projects">
          <a>&larr; Back to Projects</a>
        </NextLink>
      </div>
      <h2 className="font-display font-bold uppercase text-4xl sm:text-6xl md:text-5xl lg:text-6xl">
        {slug}
      </h2>
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-6">
        <article className="lg:col-span-2 relative h-48 sm:h-80 lg:h-72">
          <Image
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
          egestas pretium aenean pharetra. Orci eu lobortis elementum nibh
          tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra
          vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit
          tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna
          duis convallis convallis tellus. Urna molestie at elementum eu. Nunc
          sed blandit libero volutpat.
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

export default ProjectPage;
