import { getLayout } from "src/layouts/Layout";

const About: React.FunctionComponent & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section className="bg-white dark:bg-almostblack font-sans dark:border-gray-800 py-24">
      <article className="prose-2xl text-left  font-display">
        <span className="font-semibold inline">Andy Williams</span> is a
        developer and photographer based in Edmonton, Canada.
      </article>
    </section>
  );
};

About.getLayout = getLayout;

export default About;
