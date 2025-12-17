import NextLink from 'next/link';
import { getLayout } from 'src/layouts/Layout';

type ContactLinkProps = {
  title: string;
  href: string;
};

const ContactLink = ({ title, href }: ContactLinkProps) => {
  return (
    <li className="inline font-display2 mr-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-250 ease-in ">
      <span className="font-light font-display2 opacity-50">@</span>
      <NextLink href={href}>
        <a className="">{title}</a>
      </NextLink>
    </li>
  );
};

const Contact = () => {
  return (
    <section className="bg-white dark:bg-almostblack font-sans py-12">
      <div className="">
        <h2 className="hidden text-2xl dark:text-gray-200 font-bold font-sans text-gray-700 text-left mb-8">
          Contact
        </h2>
        <div className="mx-auto pr-24 md:pr-0">
          <ul className="flex flex-col font-display uppercase text-6xl sm:text-6xl md:text-5xl lg:text-6xl">
            <ContactLink href="mailto:andy@nonissue.org" title="Email" />
            <ContactLink href="https://github.com/nonissue" title="Github" />
            <ContactLink
              href="https://instagram.com/nonissue"
              title="Instagram"
            />
            <ContactLink href="https://twitter.com/nonissue" title="Twitter" />
          </ul>
        </div>

        <br />
      </div>
    </section>
  );
};

Contact.getLayout = getLayout;

export default Contact;
