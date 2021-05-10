import NextLink from "next/link";
import { getLayout } from "src/layouts/Layout";

const Contact: React.FunctionComponent & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section className="padded-container bg-white dark:bg-almostblack font-sans">
      <div className="">
        <h2 className="hidden text-3xl dark:text-gray-200 rcrsv font-medium  text-gray-700 text-left mb-8">
          Contact
        </h2>

        <div className=" leading-10 mx-auto ">
          <ul className="inline-flex flex-wrap font-display uppercase text-5xl">
            <li className="inline mr-2">
              <NextLink href="mailto:andy@nonissue.org">
                <a className="">
                  <span className="opacity-50">@</span>
                  email
                </a>
              </NextLink>
            </li>
            <li className="inline mr-2">
              <NextLink href="https://github.com/nonissue">
                <a className="">
                  <span className="opacity-50">@</span>
                  Github
                </a>
              </NextLink>
            </li>
            <li className="inline mr-2">
              <NextLink href="https://instagram.com/nonissue">
                <a className="">
                  <span className=" font-normal opacity-50">@</span>
                  instagram
                </a>
              </NextLink>
            </li>
            <li className="inline">
              <NextLink href="https://twitter.com/nonissue">
                <a className="">
                  <span className=" font-normal opacity-50">@</span>
                  twitter
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

Contact.getLayout = getLayout;

export default Contact;
