import Link from "next/link";

type NewHeaderLinkProps = {
  href: string;
  title: string;
};

const NewHeaderLink = ({ title, href }: NewHeaderLinkProps) => {
  return (
    <div className="text-xs sm:text-lg font-mono">
      <Link href={href}>{title}</Link>
    </div>
  );
};

export { NewHeaderLink };
