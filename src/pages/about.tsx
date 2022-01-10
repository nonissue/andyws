import { getLayout } from 'src/layouts/Layout';

const About = () => {
  return (
    <section className="py-24 font-sans bg-white dark:bg-almostblack dark:border-gray-800">
      <article className="font-display text-left prose-2xl">
        <span className="inline font-semibold">Andy Williams</span> is a
        developer and photographer based in Edmonton, Canada.
      </article>
    </section>
  );
};

About.getLayout = getLayout;

export default About;
