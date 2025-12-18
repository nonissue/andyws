/* eslint-disable react/display-name */
import { NextPage } from 'next/types';
import { getLayout } from '@/layouts/Layout';
import NextLink from 'next/link';

type ContactLinkProps = {
  title: string;
  href: string;
};

const ContactLink = ({ title, href }: ContactLinkProps) => {
  return (
    <li className="inline font-bold font-display2 mr-2 hover:text-black dark:hover:text-white transition-colors duration-1000 ease-in ">
      <span className="font-light font-display2 opacity-50">@</span>
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
    <section className="font-sans ">
      <div className="">

          <ul className="flex flex-col transform rotate-[35deg] ml-8 text-klimOrange dark:text-black text-center font-display uppercase text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
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
