import NextLink from "next/link";
import { Tag, TagDropdown } from "src/components";

type Project = {
  title: string;
  tags: string[];
  description: string;
  type: string;
  link: string;
  imgsrc: string;
};

const ProjectItem = (project: Project) => {
  return (
    <div
      className="px-0 py-4 grid-cols-1 grid my-2
          md:grid-cols-1 lg:grid-cols-1  lg:last:mb-12"
    >
      <div
        className="max-w-4xl text-left mx-auto grid lg:grid-cols-2 w-full test:text-center
                    md:max-w-none md:mx-0
                    lg:col-span-1 "
      >
        <NextLink href={project.link}>
          <a href={project.link} className="flex h-full items-center">
            <h2
              className="text-3xl mt-0.5 mb-2 font-sans font-black tracking-tightest text-gray-700 underline-gray-100
              md:text-3xl md:mt-1 md:mb-1 dark:underline-gray-500
              lg:text-6xl
            hover:text-orange-500 transition-colors duration-300
            dark:text-gray-100 dark:hover:text-orange-400"
            >
              {project.title}
            </h2>
          </a>
        </NextLink>

        <div
          className="space-x-1 space-y-1 flex-wrap w-full flex flex-shrink justify-end content-center static
           -ml-1 mt-0 mb-0 max-w-sm
            md:mb-2 md:pr-7
           lg:pr-0 lg:-ml-1"
        >
          <TagDropdown />
          {false && project.tags.map((title, index) => (
            <Tag key={title} title={`#${title}`} index={index} />
          ))}
        </div>
      </div>

      <div className="col-span-2 grid mt-3 md:mt-0 lg:col-span-2">
        <article className="prose lg:prose-xl text-gray-600 pb-0 md:mx-0 dark:text-gray-300">
          {project.description}
        </article>
      </div>
    </div>
  );
};

export { ProjectItem };
