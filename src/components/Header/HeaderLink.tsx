import Link from "next/link";
const NEGATIVE_ONE = -1;

type MenuLinkProps = {
  title: string;
  href: string;

  closePopover: () => void;
};

const HeaderLink = ({ title, href, closePopover }: MenuLinkProps) => {
  return (
    <li>
      <button
        onClick={() => closePopover()}
        className="hover:text-red-500 dark:hover:text-red-400 transition-colors duration-250 ease-in"
        tabIndex={NEGATIVE_ONE}
      >
        <Link href={href}>{title}</Link>
      </button>
    </li>
  );
};

export { HeaderLink };
