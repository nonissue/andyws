import { ProjectCard, Timeline, Header } from "src/components";

const Index: React.FunctionComponent = () => {
  return (
    <>
      <section className="dark:text-gray-400 shadow-xl mb-8 px-2 bg-white dark:bg-gray-900 body-font max-w-6xl mx-auto">
        <Header />

        <h2 className="text-xl text-gray-800 dark:text-white text-left lg:px-0 font-semibold px-4 pl-0 mx-4 mt-8 mb-2">
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

        <div className="container -mx-2 py-6 bg-gray-900">
          <h2 className="tracking-widest text-3xl title-font opacity-100 text-white text-center lg:px-0 font-medium uppercase px-4 mx-4 my-8">
            Activity
          </h2>

          <Timeline />
        </div>
      </section>
    </>
  );
};

export default Index;
