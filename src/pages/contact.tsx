import { getLayout } from "src/layouts/Layout";

const About: React.FunctionComponent & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section className="padded-container bg-white dark:bg-gray-900 font-display">
      <div className="">
        <h2 className="text-2xl dark:text-gray-200 font-bold font-display text-gray-700 text-left mb-8">
          Contact
        </h2>

        <div className="flex flex-wrap">
          Email me at andy [at] nonissue.org or find me on
          instagram/twitter/github: @nonissue.
        </div>

        <br />
      </div>
    </section>
  );
};

About.getLayout = getLayout;

export default About;
