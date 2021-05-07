import NextLink from "next/link";
import { LinkProps as NextLinkProps } from "next/dist/client/link";
import { PropsWithChildren } from "react";

export type NextWrappedLinkProps = PropsWithChildren<
  NextLinkProps & { close?: void }
>;

const WrappedNextLink = (props: NextWrappedLinkProps) => {
  const { href, children, ...rest } = props;
  console.log(props);
  return (
    <NextLink href={href}>
      <a {...rest} className="">
        {children}
      </a>
    </NextLink>
  );
};

export { WrappedNextLink };
