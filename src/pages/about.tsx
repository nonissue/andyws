import { getLayout } from "src/layouts/Layout";

const About = () => {
  return (
    <section className="bg-white py-24 font-sans dark:border-gray-800 dark:bg-almostblack">
      <article className="prose-2xl text-left font-display">
        <span className="inline font-semibold">Andy Williams</span> is a
        developer and photographer based in Edmonton, Canada.
      </article>
    </section>
  );
};

About.getLayout = getLayout;

export default About;
