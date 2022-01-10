import Link from 'next/link';
const NEGATIVE_ONE = 0;

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
        className="hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200 ease-in"
        tabIndex={NEGATIVE_ONE}
      >
        <Link href={href}>
          <a tabIndex={-1}>{title}</a>
        </Link>
      </button>
    </li>
  );
};

export { HeaderLink };
