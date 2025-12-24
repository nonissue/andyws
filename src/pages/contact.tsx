import NextLink from "next/link";
import { getLayout } from "src/layouts/Layout";

type ContactLinkProps = {
  title: string;
  href: string;
};

const ContactLink = ({ title, href }: ContactLinkProps) => {
  return (
    <li className="duration-250 mr-2 inline font-display2 transition-colors ease-in hover:text-blue-500 dark:hover:text-blue-400">
      <span className="font-display2 font-light opacity-50">@</span>
      <NextLink href={href}>
        <a className="">{title}</a>
      </NextLink>
    </li>
  );
};

const Contact = () => {
  return (
    <section className="bg-white py-12 font-sans dark:bg-almostblack">
      <div className="">
        <h2 className="mb-8 hidden text-left font-sans text-2xl font-bold text-gray-700 dark:text-gray-200">
          Contact
        </h2>
        <div className="mx-auto pr-24 md:pr-0">
          <ul className="flex flex-col font-display text-6xl uppercase sm:text-6xl md:text-5xl lg:text-6xl">
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
