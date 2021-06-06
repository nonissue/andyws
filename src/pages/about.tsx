import NextLink from "next/link";
import { getLayout } from "src/layouts/Layout";

const About: React.FunctionComponent & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section className="bg-white dark:bg-almostblack font-sans dark:border-gray-800">
      <div className="text-xl text-left py-0 leading-10 font-display">
        <span className="font-semibold inline">Andy Williams</span> is a
        developer and photographer based in Edmonton, Canada.
      </div>
      <div className="w-full text-center">
        <NextLink href="/contact">
          <a className="text-xl font-mono uppercase underline opacity-70">
            Contact
          </a>
        </NextLink>
      </div>
    </section>
  );
};

About.getLayout = getLayout;

export default About;
