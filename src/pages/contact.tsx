import NextLink from 'next/link';
import { getLayout } from 'src/layouts/Layout';

type ContactLinkProps = {
  title: string;
  href: string;
};

const ContactLink = ({ title, href }: ContactLinkProps) => {
  return (
    <li className="inline mr-2 font-display2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 ease-in">
      <span className="font-display2 font-light opacity-50">@</span>
      <NextLink href={href}>
        <a className="">{title}</a>
      </NextLink>
    </li>
  );
};

const Contact = () => {
  return (
    <section className="py-12 font-sans bg-white dark:bg-almostblack">
      <div className="">
        <h2 className="hidden mb-8 font-sans text-2xl font-bold text-left text-gray-700 dark:text-gray-200">
          Contact
        </h2>
        <div className="pr-24 mx-auto md:pr-0">
          <ul className="flex flex-col font-display text-4xl uppercase sm:text-6xl md:text-5xl lg:text-6xl">
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
