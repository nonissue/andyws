/* eslint-disable react/display-name */
import { NextPage } from 'next/types';
import { getLayout } from '@/layouts/Layout';
import { LinkWrapper, withLinkStyle } from 'src/components/LinkWrapper';

const PrimaryLink = withLinkStyle(
  LinkWrapper,
  `
  px-1 md:px-2  no-underline py-1
  box-decoration-clone ${/* for multiline padded bg with css */ ''}
  bg-blue-200 text-blue-700 
  transition-all duration-200 hover:bg-sky-100 
  dark:text-blue-200 dark:bg-blue-700/25
  dark:hover:text-blue-100  dark:hover:bg-blue-700
  `
);

const SecondaryLink = withLinkStyle(
  LinkWrapper,
  `no-underline
  leading-normal text-blue-600
  transition-all duration-300 hover:text-blue-900 
  dark:text-blue-300 dark:hover:text-blue-100`
);

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <>
      <section className="prose prose-lg dark:prose-invert md:prose-xl lg:prose-2xl">
        <p>
          Hi! I&apos;m Andy Williams. I am a Computing student{' @ '}
          <PrimaryLink href="https://macewan.ca">
            Macewan University
          </PrimaryLink>{' '}
          in Edmonton, Canada. I spend most of my free time tinkering with{' '}
          <span className="inline-block whitespace-nowrap">
            <PrimaryLink href="https://github.com/nonissue/andyws">
              web technology
            </PrimaryLink>
            ,
          </span>{' '}
          attempting to understand my own overly-complicated, rube-goldberesque{' '}
          <PrimaryLink href="https://github.com/nonissue/dotfiles">
            dotfiles
          </PrimaryLink>
          , or taking{' '}
          <PrimaryLink href="https://instagram.com/nonissue">
            photos
          </PrimaryLink>
          .
        </p>
        <h5 className="font-sans leading-relaxed text-gray-400 prose-sm md:prose-base lg:prose-xl">
          You can learn more about some of{' '}
          <SecondaryLink href="/projects">my current projects</SecondaryLink>,
          view <SecondaryLink href="/log">links</SecondaryLink> I find
          interesting, peruse{' '}
          <SecondaryLink href="https://verbosed.vercel.app">
            words
          </SecondaryLink>{' '}
          that pique my interest, browse some of my favourite{' '}
          <SecondaryLink href="/photos">photos</SecondaryLink>, or find out
          different ways to{' '}
          <SecondaryLink href="/contact">contact me</SecondaryLink>.
        </h5>
      </section>
    </>
  );
};

IndexPage.getLayout = getLayout;

export default IndexPage;
