import NextLink from "next/link";
import { LinkProps as NextLinkProps } from "next/dist/client/link";
import { forwardRef, PropsWithChildren } from "react";

export type NextWrappedLinkProps = PropsWithChildren<
  NextLinkProps & { close?: void }
>;

const WrappedNextLink = (props: NextWrappedLinkProps) => {
  const { href, children, ...rest } = props;
  console.log(props);
  return (
    <NextLink href={href}>
      <a {...rest}>{children}</a>
    </NextLink>
  );
};

type Ref = HTMLAnchorElement;
type Props = {
  children: React.ReactNode;
  href: string;
  onClick: () => void;
};

const Test = forwardRef<Ref, Props>(({ onClick, href, children }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      {children}
    </a>
  );
});

Test.displayName = "Test";

export { Test, WrappedNextLink };
