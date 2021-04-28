import NextLink from "next/link";
import { getLayout } from "src/layouts/Layout";

const About: React.FunctionComponent & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  const rowStyle = `flex lg:items-start flex-col lg:flex-col lg:items-start lg:mb-2 justify-between`;
  const labelStyle = `rcrsv-mono uppercase text-gray-400 dark:text-gray-400 tracking-wider text-lg lg:text-md pr-2`;
  const linkStyle = `rcrsv-custom-label flex items-center text-xl lg:text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-orange-600 dark:hover:text-orange-400 font-label my-2`;

  return (
    <section className="padded-container bg-white dark:bg-gray-900 font-display  lg:border-l lg:border-r dark:border-gray-800">
      <div className="">
        <h2 className="text-2xl dark:text-gray-200 font-bold font-display text-gray-700 text-left mb-8">
          Contact
        </h2>

        <div className=" text-md lg:text-xl leading-10 mx-auto ">
          <ul className="grid grid-cols-1 lg:grid-cols-3">
            <li className={rowStyle}>
              <div className={labelStyle}>Email:</div>
              <NextLink href="mailto:andy@nonissue.org">
                <a className={linkStyle}>
                  <span className="text-sm lg:text-lg font-normal opacity-50">
                    @
                  </span>
                  clickme
                  {/* andy
                  <span className="text-sm lg:text-lg font-normal opacity-50">
                    @
                  </span>
                  nonissue.org */}
                </a>
              </NextLink>
            </li>
            <li className={rowStyle}>
              <div className={labelStyle}>Github:</div>
              <NextLink href="https://github.com/nonissue">
                <a className={linkStyle}>
                  <span className="text-sm lg:text-lg font-normal opacity-50">
                    @
                  </span>
                  nonissue
                </a>
              </NextLink>
            </li>
            <li className={rowStyle}>
              <div className={labelStyle}>Instagram:</div>
              <NextLink href="https://instagram.com/nonissue">
                <a className={linkStyle}>
                  <span className="text-sm font-normal lg:text-md opacity-50">
                    @
                  </span>
                  nonissue
                </a>
              </NextLink>
            </li>
            <li className={rowStyle}>
              <div className={labelStyle}>Twitter:</div>
              <NextLink href="https://twitter.com/nonissue">
                <a className={linkStyle}>
                  <span className="text-sm lg:text-lg font-normal opacity-50">
                    @
                  </span>
                  nonissue
                </a>
              </NextLink>
            </li>
          </ul>
        </div>

        <br />
      </div>
    </section>
  );
};

About.getLayout = getLayout;

export default About;
