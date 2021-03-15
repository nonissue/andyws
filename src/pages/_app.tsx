/* eslint-disable @typescript-eslint/ban-types */

import type { NextComponentType, NextPageContext } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import type { NextRouter } from "next/router";

import { ThemeProvider } from "next-themes";

import "./global.css";
import "./custom.css";

// import { Providers } from "src/components";

export interface AppRenderProps {
  pageProps: object;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object> & {
    theme: string;
  };
  router: NextRouter;
}

type ComponentWithLayout<P> = NextComponentType<NextPageContext, any, P> & {
  getLayout?: (
    page: JSX.Element,
    layoutProps: Record<string, unknown>
  ) => JSX.Element;
};
type AppPropsWithLayout<P = Record<string, unknown>> = AppProps<P> & {
  Component: ComponentWithLayout<P> & { theme: string };
};

// const MyApp: React.FunctionComponent<AppProps & AppRenderProps> = ({
const MyApp: React.FunctionComponent<AppPropsWithLayout> = ({
  // AppPropsWithLayout
  Component,
  pageProps,
}) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <Head>
        <title>non</title>
      </Head>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </ThemeProvider>
  );
};

export default MyApp;
