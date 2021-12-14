import { NextPage } from "next/types";
import Link from "next/link";
import { LinkProps as NextLinkProps } from "next/dist/client/link";
import { getLayout } from "@/layouts/Layout";
import { PropsWithChildren } from "react";

// type StyledLinkProps = PropsWithChildren<
//   { ref: LinkRef } & NextLinkProps & {
//     className: string;
//     href: string;
//   }
// >;

// type LinkRef = HTMLAnchorElement;

// // eslint-disable-next-line react/display-name
// const StyledLink = forwardRef(
//   (
//     { href, children, className }: StyledLinkProps,
//     ref: Ref<LinkRef>
//   ) => {
//     return (
//       <a className={className} href={href} onClick={onClick} ref={ref}>
//         {children}
//       </a>
//     );
//   }
// );

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

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <>
      <section
        className="prose prose-lg lg:prose-2xl 
        prose-a:no-underline prose-a:inline-block 
        prose-a:transition-all prose-a:duration-150
        dark:prose-invert
      "
      >
        {/* 
        prose-a:text-sky-700 prose-a:bg-sky-200 
         hover:prose-a:text-sky-100 hover:prose-a:bg-sky-600
        dark:prose-a:bg-sky-900 dark:prose-a:inline-block
        dark:prose-a:text-sky-200 dark:hover:prose-a:text-sky-900 */}
        <p>
          Hi! I&apos;m Andy Williams. I am a Computer Science student{" @ "}
          <LinkWrapper
            href="https://macewan.ca"
            className="bg-yellow-400 hover:bg-white"
          >
            Macewan University
          </LinkWrapper>
          &nbsp;in Edmonton, Canada. I spend most of my free time tinkering with{" "}
          <Link href="https://github.com/nonissue/andyws">
            <a>web technologies</a>
          </Link>
          , attempting to understand my own overly-complicated,
          rube-goldberesque{" "}
          <Link href="https://github.com/nonissue/dotfiles">
            <a>dotfiles</a>
          </Link>
          , or taking{" "}
          <Link href="https://instagram.com/nonissue">
            <a>photos</a>
          </Link>
          .
        </p>
        <h5 className="text-gray-400 text-xl leading-relaxed font-sans prose-a:bg-transparent prose-a:bg-opacity-0 dark:prose-a:bg-opacity-0  prose-a:text-sky-800">
          You can learn more about some of{" "}
          <Link href="/projects">
            <a>my current projects</a>
          </Link>
          , view{" "}
          <Link href="/log">
            <a>links</a>
          </Link>{" "}
          I find interesting, peruse{" "}
          <Link href="https://verbosed.vercel.app">
            <a>words</a>
          </Link>{" "}
          that pique my interest, browse some of my favourite{" "}
          <Link href="/photos">
            <a>photos</a>
          </Link>
          , or find out different ways to{" "}
          <Link href="/contact">
            <a>contact me</a>
          </Link>
          .
        </h5>
      </section>
    </>
  );
};

IndexPage.getLayout = getLayout;

export default IndexPage;
