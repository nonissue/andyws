import Link from "next/link";

type NewHeaderLinkProps = {
  href: string;
  title: string;
};

const NewHeaderLink = ({ title, href }: NewHeaderLinkProps) => {
  return (
    <div>
      <Link href={href}>
        <a className="font-medium transition-colors duration-200 text-xs hover:text-red-900 sm:text-base font-sans capitalize opacity-90 tracking-wide">
          {title}
        </a>
      </Link>
    </div>
  );
};

export { NewHeaderLink };
