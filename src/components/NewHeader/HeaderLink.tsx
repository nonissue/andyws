import Link from 'next/link';

type NewHeaderLinkProps = {
  href: string;
  title: string;
};

const NewHeaderLink = ({ title, href }: NewHeaderLinkProps) => {
  return (
    <div>
      <Link href={href}>
        <a className="font-sans text-xs font-medium tracking-wide text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 capitalize opacity-90 transition-colors duration-200 sm:text-base">
          {title}
        </a>
      </Link>
    </div>
  );
};

export { NewHeaderLink };
