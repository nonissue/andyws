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
    <div className="p-4 md:w-1/2 lg:w-1/3 opacity-100 hover:opacity-100">
      <div className="h-auto border text-gray-800 border-gray-100 dark:bg-gray-900 dark:border-gray-800 overflow-hidden shadow-sm cursor-pointer transition-all duration-500 group hover:border-gray-400 dark:hover:border-gray-700 hover:shadow-md">
        <div className="relative w-full h-48 border-0 border-gray-900 dark:border-gray-900 border-b-0">
          <Image
            alt="Next.js logo"
            src={imgsrc}
            layout="fill"
            objectFit="cover"
            className="opacity-50 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
        <div className="p-6 border-t border-gray-200 dark:border-gray-800 transition-all duration-500 group-hover:border-gray-600">
          <h2 className="tracking-widest text-xs text-gray-400 font-medium dark:text-gray-400 mb-2 uppercase">
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
            {/* <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              {Math.floor(Math.random() * 902) + 135}
            </span> */}
            {/* <span className="hidden text-gray-500 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              {Math.floor(Math.random() * 10) + 2}
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
