import { ProjectCard, Timeline } from "src/components";

const Index: React.FunctionComponent = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-6 mx-auto lg:px-0">
          <div className="w-full flex justify-start lg:justify-start  mb-4">
            <img
              src="/logo-lightfg-crop.png"
              alt="nonissue logo"
              className="object-contain h-full max-h-12 p-1 hover:opacity-10 cursor-pointer transition-opacity duration-500"
            />
          </div>

          <div className="flex flex-wrap -m-4">
            <ProjectCard
              title="Test Project"
              description="This is just a test project. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              type="web"
              stack={["react", "prisma", "postgres", "typescript"]}
              link="/projects/test"
              imgsrc="https://picsum.photos/seed/blotestws/640/360"
            />
            <ProjectCard
              title="The Catalyzer"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              stack={["react", "next.js"]}
              link="/projects/thecatalyzer"
              imgsrc="https://picsum.photos/seed/cata/640/360"
            />
            <ProjectCard
              title="The 400 Blows"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              stack={["react", "next.js"]}
              link="/projects/400blows"
              imgsrc="https://picsum.photos/seed/blows/640/360"
            />
            <ProjectCard
              title="Shooting Stars"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat."
              type="NODE.JS"
              stack={["react", "prisma", "postgres", "typescript"]}
              link="/projects/shootingstars"
              imgsrc="https://picsum.photos/seed/shooting/640/360"
            />
          </div>
        </div>
      </section>

      <Timeline />
    </>
  );
};

export default Index;
