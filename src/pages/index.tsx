import Image from "next/image";
import { ProjectCard, Timeline } from "src/components";

const Index: React.FunctionComponent = () => {
  return (
    <>
      <section className="text-gray-400 shadow-xl mb-8 bg-gray-900 body-font max-w-6xl mx-auto">
        <div className="container px-4 py-6 mx-auto">
          <div className="flex items-center border-0 mt-8 mx-3">
            <div className="w-full border-0 flex justify-start lg:justify-start ">
              <Image
                src="/saol-lightfg.svg"
                alt="nonissue logo"
                width={75 * 1.5}
                height={28 * 1.5}
              />
            </div>

            <div className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-xl text-white text-left lg:px-0 font-semibold px-4 pl-0 mx-4 mt-8 mb-2">
            Projects
          </h2>

          <div className="flex flex-wrap -mx-4 px-4">
            <ProjectCard
              title="Test Project"
              description="This is just a test project. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              type="web"
              tags={["react", "prisma", "postgres", "typescript"]}
              link="/projects/test"
              imgsrc="/project-thumbs/1.jpg"
            />
            <ProjectCard
              title="The Catalyzer"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "next.js"]}
              link="/projects/thecatalyzer"
              imgsrc="/project-thumbs/2.jpg"
            />
            <ProjectCard
              title="The 400 Blows"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "next.js"]}
              link="/projects/400blows"
              imgsrc="/project-thumbs/3.jpg"
            />
            <ProjectCard
              title="Shooting Stars"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "prisma", "postgres", "typescript"]}
              link="/projects/shootingstars"
              imgsrc="/project-thumbs/4.jpg"
            />
            <ProjectCard
              title="Test Project"
              description="This is just a test project. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              type="web"
              tags={["react", "prisma", "postgres", "typescript"]}
              link="/projects/test"
              imgsrc="/project-thumbs/1.jpg"
            />
            <ProjectCard
              title="The Catalyzer"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "next.js"]}
              link="/projects/thecatalyzer"
              imgsrc="/project-thumbs/2.jpg"
            />
            <ProjectCard
              title="Shooting Stars"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "prisma", "postgres", "typescript"]}
              link="/projects/shootingstars"
              imgsrc="/project-thumbs/3.jpg"
            />
            <ProjectCard
              title="The 400 Blows"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "next.js"]}
              link="/projects/400blows"
              imgsrc="/project-thumbs/4.jpg"
            />
          </div>
        </div>
        <div className="container px-4 py-6 mx-auto bg-gray-900">
          <h2 className="tracking-widest text-xl title-font opacity-75 text-white text-center lg:px-0 font-normal uppercase px-4 mx-4 my-8">
            Activity
          </h2>

          <Timeline />
        </div>
      </section>
    </>
  );
};

export default Index;
