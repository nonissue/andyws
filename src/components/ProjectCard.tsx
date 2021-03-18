import Image from "next/image";

export type ProjectCardProps = {
  title: string;
  description: string;
  type: string;
  link: string;
  tags: string[];
  imgsrc: string;
};

export const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
  title,
  description,
  type,
  link,
  tags,
  imgsrc,
}) => {
  return (
    <div className="py-4 px-2 md:w-1/2 lg:w-1/3 opacity-100 hover:opacity-100">
      <div className="z-0 h-auto border text-gray-800 border-gray-100 dark:bg-gray-900 dark:border-gray-800 overflow-hidden shadow-sm cursor-pointer transition-all duration-500 group hover:border-gray-400 dark:hover:border-gray-700 hover:shadow-md">
        <div className="relative w-full h-48 border-0 border-gray-900 dark:border-gray-900 border-b-0 z-0">
          <Image
            alt="Next.js logo"
            src={imgsrc}
            layout="fill"
            objectFit="cover"
            className="opacity-100 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
        <div className="p-6 border-t border-gray-200 dark:border-gray-800 transition-all duration-500 group-hover:border-gray-600">
          <h2 className="tracking-widest text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase">
            {type}
          </h2>
          <h1 className="title-font text-gray-800 text-2xl font-semibold dark:text-white mb-3 font-display">
            {title}
          </h1>
          <p className="mb-3 line-clamp-3 text-gray-500 dark:text-gray-300 font-sans font-normal leading-relaxed">
            {description}
          </p>

          <div className="leading-normal text-xs font-mono flex flex-row w-100 flex-wrap mb-3 text-gray-400 dark:text-gray-600">
            {tags.map((tag) => (
              <span key={tag} className=" mr-2 block">
                #
                <a
                  href="#"
                  className="dark:text-gray-400 hover:text-gray-300 transition-colors duration-300"
                >
                  {tag}
                </a>
              </span>
            ))}
          </div>

          <div className="flex items-center justify-end mt-6 flex-wrap mb-0">
            <a
              className="dark:text-yellow-300 text-pink-500 font-semibold text-xs uppercase tracking-widest inline-flex lg:w-auto md:w-full items-center md:mb-2 lg:mb-0"
              href={link}
            >
              View {title}
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
