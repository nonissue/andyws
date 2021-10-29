import Link from "next/link";

type NewHeaderLinkProps = {
  href: string;
  title: string;
};

const NewHeaderLink = ({ title, href }: NewHeaderLinkProps) => {
  return (
    <div className="text-xs sm:text-base font-display2 uppercase opacity-90 tracking-wider">
      <Link href={href}>{title}</Link>
    </div>
  );
};

export { NewHeaderLink };
