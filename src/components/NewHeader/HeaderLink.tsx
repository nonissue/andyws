import Link from 'next/link';

type NewHeaderLinkProps = {
  href: string;
  title: string;
};

const NewHeaderLink = ({ title, href }: NewHeaderLinkProps) => {
  return (
    <div>
      <Link href={href}>
        <a
          className="font-medium transition-colors duration-200 text-xs sm:text-base font-sans capitalize opacity-90 tracking-wide
        hover:text-blue-600 dark:hover:text-blue-400 "
        >
          {title}
        </a>
      </Link>
    </div>
  );
};

export { NewHeaderLink };
