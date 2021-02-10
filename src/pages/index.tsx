import { ProjectCard, Timeline } from "src/components";

const Index: React.FunctionComponent = () => {
  return (
    <>
      <section className="text-gray-400 bg-black body-font">
        <div className="container px-4 py-6 mx-auto">
          <div className="w-full flex justify-center lg:justify-start mt-8">
            <img
              src="/logo-lightfg-crop.png"
              alt="nonissue logo"
              className="opacity-40 object-contain h-full max-h-12 p-1 lg:p-0 lg:max-h-8 lg:mx-4 hover:opacity-90 cursor-pointer transition-opacity duration-500 -ml-4"
            />
          </div>

          <h2 className="tracking-widest text-xl title-font opacity-75 text-white text-center lg:px-0 font-normal uppercase px-4 mx-4 my-8">
            Projects
          </h2>

          <div className="flex flex-wrap -m-4 px-4">
            <ProjectCard
              title="Test Project"
              description="This is just a test project. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              type="web"
              tags={["react", "prisma", "postgres", "typescript"]}
              link="/projects/test"
              imgsrc="https://picsum.photos/seed/blotestws/640/360"
            />
            <ProjectCard
              title="The Catalyzer"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "next.js"]}
              link="/projects/thecatalyzer"
              imgsrc="https://picsum.photos/seed/cata/640/360"
            />
            <ProjectCard
              title="The 400 Blows"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "next.js"]}
              link="/projects/400blows"
              imgsrc="https://picsum.photos/seed/blows/640/360"
            />
            <ProjectCard
              title="Shooting Stars"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "prisma", "postgres", "typescript"]}
              link="/projects/shootingstars"
              imgsrc="https://picsum.photos/seed/shooting/640/360"
            />
            <ProjectCard
              title="Test Project"
              description="This is just a test project. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              type="web"
              tags={["react", "prisma", "postgres", "typescript"]}
              link="/projects/test"
              imgsrc="https://picsum.photos/seed/blotestws/640/360"
            />
            <ProjectCard
              title="The Catalyzer"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "next.js"]}
              link="/projects/thecatalyzer"
              imgsrc="https://picsum.photos/seed/cata/640/360"
            />
            <ProjectCard
              title="Shooting Stars"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "prisma", "postgres", "typescript"]}
              link="/projects/shootingstars"
              imgsrc="https://picsum.photos/seed/shooting/640/360"
            />
            <ProjectCard
              title="The 400 Blows"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              tags={["react", "next.js"]}
              link="/projects/400blows"
              imgsrc="https://picsum.photos/seed/blows/640/360"
            />
          </div>
        </div>
      </section>

      <div className="container px-4 py-6 mx-auto bg-black">
        <h2 className="tracking-widest text-xl title-font opacity-75 text-white text-center lg:px-0 font-normal uppercase px-4 mx-4 my-8">
          Activity
        </h2>

        <Timeline />
      </div>
    </>
  );
};

export default Index;
