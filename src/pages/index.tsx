/* eslint-disable react/display-name */
import { NextPage } from "next/types";
import { getLayout } from "@/layouts/Layout";
import NextLink from "next/link";

type ContactLinkProps = {
  title: string;
  href: string;
};

const ContactLink = ({ title, href }: ContactLinkProps) => {
  return (
    <li className="mr-2 inline font-display2 font-bold transition-colors duration-300 ease-in-out hover:text-black dark:hover:text-white">
      <span className="font-display2 font-light opacity-50">@</span>
      <NextLink href={href}>
        <a className="">{title}</a>
      </NextLink>
    </li>
  );
};

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section className="font-sans">
      <div className="">
        <ul className="-mr-[4vw] -mt-[3vh] flex rotate-[35deg] transform flex-col text-center font-display text-5xl uppercase text-klimOrange dark:text-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl landscape:text-xl landscape:sm:text-2xl landscape:md:text-3xl landscape:lg:text-8xl landscape:xl:text-8xl">
          <ContactLink href="mailto:andy@nonissue.org" title="Email" />
          <ContactLink href="https://github.com/nonissue" title="Github" />
          <ContactLink
            href="https://instagram.com/nonissue"
            title="Instagram"
          />
          <ContactLink href="https://twitter.com/nonissue" title="Twitter" />
        </ul>
      </div>
    </section>
  );
};

IndexPage.getLayout = getLayout;

export default IndexPage;
