import { getLayout } from "src/layouts/Layout";

const About: React.FunctionComponent & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section className="padded-container bg-white dark:bg-gray-900 font-display  lg:border-l lg:border-r dark:border-gray-800">
      <div className="">
        <h2 className="text-2xl dark:text-gray-200 font-bold font-display text-gray-700 text-left mb-8 mt-4 lg:mt-0">
          About
        </h2>

        <div className="flex flex-wrap text-xl leading-10">
          Andy Williams is a developer and photography based in Edmonton,
          Canada.
        </div>

        <br />
      </div>
    </section>
  );
};

About.getLayout = getLayout;

export default About;
