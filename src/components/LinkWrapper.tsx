import Link from 'next/link';
import { LinkProps as NextLinkProps } from 'next/dist/client/link';
import { PropsWithChildren } from 'react';

/*

Basic LinkWrapper 
+
WIP Link Styling factory

Example:
const redLink = withStyling(LinkWrapper, 'tailwind-class-names-go-here bg-red-400 hover:bg-red-900')

Issues: 
Don't get autocomplete for tailwind classnames!!

*/

// Handle other passed through props?
// www.smashingmagazine.com/2020/06/higher-order-components-react/#provide-components-with-specific-styling

type LinkWrapperProps = PropsWithChildren<
  NextLinkProps & { className?: string }
>;

const LinkWrapper = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  className,
}: LinkWrapperProps) => {
  return (
    <Link
      passHref={true}
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
    >
      <a className={className}>{children}</a>
    </Link>
  );
};

const withLinkStyle = (
  BaseComponent: typeof LinkWrapper,
  newClassName: string
) => {
  const NewComp = (props: Omit<LinkWrapperProps, 'className'>) => {
    return <BaseComponent className={newClassName} {...props} />;
  };
  return NewComp;
};

export { LinkWrapper, withLinkStyle };
