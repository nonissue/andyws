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

const MyApp: React.FunctionComponent<AppProps & AppRenderProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <Head>
        <title>non</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
